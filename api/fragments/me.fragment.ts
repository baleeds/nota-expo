import { gql } from '@apollo/client';

export const meFragment = gql`
  fragment Me on User {
    id
    email
  }
`;
