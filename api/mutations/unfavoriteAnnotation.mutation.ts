import { gql } from '@apollo/client';

export const unfavoriteAnnotationMutation = gql`
  mutation UnfavoriteAnnotation($input: UnfavoriteAnnotationInput!) {
    unfavoriteAnnotation(input: $input) {
      successful
      result {
        id
        isFavorite
        numberOfFavorites
      }
      messages {
        field
        message
      }
    }
  }
`;
