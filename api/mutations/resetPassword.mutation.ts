import { gql } from '@apollo/client';
import { meFragment } from '../fragments/me.fragment';

export const resetPasswordMutation = gql`
  mutation ResetPassword($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      result
      messages {
        field
        message
      }
    }
  }
  ${meFragment}
`;
