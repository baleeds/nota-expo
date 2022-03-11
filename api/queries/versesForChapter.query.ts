import { gql } from '@apollo/client';
import { verseFragment } from '../fragments/verse.fragment';

export const versesForChapterQuery = gql`
  query VersesForChapter($bookNumber: Int!, $chapterNumber: Int!) {
    verses(bookNumber: $bookNumber, chapterNumber: $chapterNumber) {
      ...Verse
    }
  }
  ${verseFragment}
`;
