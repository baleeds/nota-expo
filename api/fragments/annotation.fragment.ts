import { gql } from '@apollo/client';

export const annotationFragment = gql`
  fragment Annotation on Annotation {
    id
    text
    isFavorite
    numberOfFavorites
    insertedAt
    verseId
    user {
      id
      firstName
      lastName
    }
  }
`;
