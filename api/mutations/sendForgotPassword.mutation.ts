import { gql } from '@apollo/client';

export const sendForgotPasswordMutation = gql`
  mutation SendForgotPassword($input: SendForgotPasswordInput!) {
    sendForgotPassword(input: $input) {
      successful
      messages {
        field
        message
      }
    }
  }
`;
