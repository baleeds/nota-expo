import { gql } from '@apollo/client';
import { meFragment } from '../fragments/me.fragment';

export const changeDisplayNameMutation = gql`
  mutation ChangeDisplayName($input: ChangeDisplayNameInput!) {
    changeDisplayName(input: $input) {
      successful
      result {
        ...Me
      }
    }
  }
  ${meFragment}
`;
