import { gql } from '@apollo/client';

export const favoriteAnnotationMutation = gql`
  mutation FavoriteAnnotation($input: FavoriteAnnotationInput!) {
    favoriteAnnotation(input: $input) {
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
