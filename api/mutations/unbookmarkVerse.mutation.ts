import { gql } from '@apollo/client';

export const unbookmarkVerseMutation = gql`
  mutation UnbookmarkVerse($input: UnbookmarkVerseInput!) {
    unbookmarkVerse(input: $input) {
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
