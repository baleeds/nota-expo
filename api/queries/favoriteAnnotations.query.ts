import { gql } from '@apollo/client';
import { annotationFragment } from '../fragments/annotation.fragment';

export const favoriteAnnotationsQuery = gql`
  query FavoriteAnnotations($first: Int!, $after: String, $userId: ID!) {
    favoriteAnnotations(first: $first, after: $after, userId: $userId) {
      edges {
        node {
          ...Annotation
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
  ${annotationFragment}
`;
