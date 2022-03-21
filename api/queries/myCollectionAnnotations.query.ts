import { gql } from '@apollo/client';
import { annotationFragment } from '../fragments/annotation.fragment';

export const myCollectionAnnotationsQuery = gql`
  query MyCollectionAnnotations($first: Int!, $after: String) {
    annotations(first: $first, after: $after, isMine: true) {
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
