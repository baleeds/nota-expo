import { gql } from '@apollo/client';
import { annotationFragment } from '../fragments/annotation.fragment';

export const favoriteAnnotationsQuery = gql`
  query FavoriteAnnotations($first: Int!, $after: String) {
    annotations(first: $first, after: $after, isFavorite: true) {
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
