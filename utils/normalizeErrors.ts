import { ExecutionResult } from 'graphql';
import { ValidationMessage as MutationError } from '../api/__generated__/apollo-graphql';
import { objectHasProperties } from './objectHasProperties';
import { ErrorMessages } from '../constants/ErrorMessages';

interface ObjectBase {
  [key: string]: any;
}

export interface NormalizedErrors<Values> {
  hasError: boolean;
  base?: string;
  fields?: { [key: string]: string };
}

export function normalizeErrors<MutationType extends ObjectBase, Values = {}>(
  failure: Error | undefined,
  result: ExecutionResult<MutationType> | undefined,
): NormalizedErrors<Values> {
  if (failure) {
    if (failure.message.match(/network/i)) {
      return { hasError: true, base: ErrorMessages.network };
    }
    return { hasError: true, base: ErrorMessages.unknown };
  }

  const { data } = result || {};
  if (!data) {
    return { hasError: true, base: ErrorMessages.unknown };
  }

  // look through each mutation and find the errors associated with them
  const mutationErrorsMap = Object.keys(data).reduce<{ [key: string]: string }>((errorsMap, dataKey) => {
    const mutationResult = data[dataKey];
    const { messages = [] } = mutationResult || {};

    messages.forEach((error: MutationError) => {
      errorsMap[error.field ?? 'base'] = error.message || ErrorMessages.unknown;
    });

    return errorsMap;
  }, {});

  const { base, ...fields } = mutationErrorsMap;

  const areFieldsPopulated = objectHasProperties(fields);
  if (!base && !areFieldsPopulated) {
    return { hasError: false };
  }

  return {
    hasError: true,
    base: base as string,
    fields: areFieldsPopulated ? fields : undefined,
  };
}
