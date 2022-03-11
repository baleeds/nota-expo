import { gql } from '@apollo/client';

export const bookmarkVerseMutation = gql`
  mutation BookmarkVerse($input: BookmarkVerseInput!) {
    bookmarkVerse(input: $input) {
      successful
      result {
        id
        isBookmarked
      }
      messages {
        field
        message
      }
    }
  }
`;
