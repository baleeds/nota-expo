import { gql } from '@apollo/client';

export const changePasswordMutation = gql`
  mutation ChangePassword($input: ChangePasswordInput!) {
    changePassword(input: $input) {
      successful
      messages {
        field
        message
      }
    }
  }
`;
