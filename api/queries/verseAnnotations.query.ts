import { gql } from '@apollo/client';
import { annotationListFragment } from '../fragments/annotationList.fragment';

export const verseAnnotationsQuery = gql`
  query VerseAnnotations($first: Int, $after: String, $verseId: ID!) {
    publicAnnotations(first: $first, after: $after, verseId: $verseId) {
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
