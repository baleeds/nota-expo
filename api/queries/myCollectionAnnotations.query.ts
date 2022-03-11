import { gql } from '@apollo/client';
import { annotationListFragment } from '../fragments/annotationList.fragment';

export const myCollectionAnnotationsQuery = gql`
  query MyCollectionAnnotations($first: Int!, $after: String) {
    myAnnotations(first: $first, after: $after) {
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
