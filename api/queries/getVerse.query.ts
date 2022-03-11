import { gql } from '@apollo/client';
import { verseFragment } from '../fragments/verse.fragment';

export const getVerseQuery = gql`
  query GetVerse($id: ID!) {
    verse(id: $id) {
      ...Verse
    }
  }
  ${verseFragment}
`;
