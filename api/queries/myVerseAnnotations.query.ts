import { gql } from '@apollo/client';
import { annotationFragment } from '../fragments/annotation.fragment';

export const myVerseAnnotationsQuery = gql`
  query MyVerseAnnotations($verseId: ID!) {
    myAnnotations(verseId: $verseId, first: 100) {
      edges {
        node {
          ...Annotation
        }
      }
    }
  }
  ${annotationFragment}
`;
