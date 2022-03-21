import { gql } from '@apollo/client';
import { annotationFragment } from '../fragments/annotation.fragment';

export const saveAnnotationMutation = gql`
  mutation SaveAnnotation($input: SaveAnnotationInput!) {
    saveAnnotation(input: $input) {
      result {
        ...Annotation
      }
      messages {
        field
        message
      }
      successful
    }
  }
  ${annotationFragment}
`;
