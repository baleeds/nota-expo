import { gql } from '@apollo/client';
import { annotationListFragment } from '../fragments/annotationList.fragment';

export const favoriteAnnotationsQuery = gql`
  query FavoriteAnnotations($first: Int!, $after: String, $userId: ID!) {
    favoriteAnnotations(first: $first, after: $after, userId: $userId) {
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
