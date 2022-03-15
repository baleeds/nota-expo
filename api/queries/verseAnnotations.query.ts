import { gql } from '@apollo/client';
import { annotationFragment } from '../fragments/annotation.fragment';

export const verseAnnotationsQuery = gql`
  query VerseAnnotations($first: Int, $after: String, $verseId: ID!) {
    publicAnnotations(first: $first, after: $after, verseId: $verseId) {
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
