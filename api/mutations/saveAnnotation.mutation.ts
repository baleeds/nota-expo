import { gql } from '@apollo/client';

export const saveAnnotationMutation = gql`
  mutation SaveAnnotation($input: SaveAnnotationInput!) {
    saveAnnotation(input: $input) {
      result {
        id
        text
      }
      messages {
        field
        message
      }
      successful
    }
  }
`;
