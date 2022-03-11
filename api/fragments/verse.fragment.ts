import { gql } from '@apollo/client';

export const verseFragment = gql`
  fragment Verse on Verse {
    id
    isBookmarked
    isAnnotatedByMe
    isAnnotated
  }
`;
