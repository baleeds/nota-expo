import { gql } from '@apollo/client';
import { annotationListFragment } from '../fragments/annotationList.fragment';

export const collectionAnnotationsQuery = gql`
  query CollectionAnnotations($userId: ID!, $first: Int, $after: String) {
    publicAnnotations(userId: $userId, first: $first, after: $after) {
      edges {
        node {
          ...AnnotationList
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
  ${annotationListFragment}
`;
