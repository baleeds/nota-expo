import { gql } from '@apollo/client';

export const userProfileQuery = gql`
  query UserProfile($userId: ID!) {
    user(id: $userId) {
      id
      firstName
      lastName
    }
  }
`;
