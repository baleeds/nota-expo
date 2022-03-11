import { gql } from '@apollo/client';

export const annotationListFragment = gql`
  fragment AnnotationList on Annotation {
    id
    text
    insertedAt
    isFavorite
    numberOfFavorites
    verseId
    user {
      id
      firstName
      lastName
    }
  }
`;
