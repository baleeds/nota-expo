import { gql } from '@apollo/client';
import { annotationFragment } from '../fragments/annotation.fragment';

export const collectionAnnotationsQuery = gql`
  query CollectionAnnotations($userId: ID!, $first: Int, $after: String) {
    publicAnnotations(userId: $userId, first: $first, after: $after) {
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
