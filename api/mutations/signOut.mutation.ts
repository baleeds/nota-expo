import { gql } from '@apollo/client';

export const signOutMutation = gql`
  mutation SignOut($refreshToken: String!) {
    signOut(refreshToken: $refreshToken) {
      result
      messages {
        field
        message
      }
    }
  }
`;
