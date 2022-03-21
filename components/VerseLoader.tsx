import React, { useEffect } from 'react';
import { useGetVerseLazyQuery, VerseFragment } from '../api/__generated__/apollo-graphql';
import { usePassage } from '../hooks/usePassage';

interface Props {
  bookName?: string;
  chapterNumber?: number;
  verseNumber?: number;
  children: ({ verse }: { verse: VerseFragment }) => JSX.Element;
}

export const VerseLoader: React.FC<Props> = ({ bookName, chapterNumber, verseNumber, children }) => {
  const [fetchVerse, { data, loading }] = useGetVerseLazyQuery();

  const { passageId } = usePassage({ bookName, chapterNumber, verseNumber });

  useEffect(() => {
    if (!passageId) return;

    fetchVerse({
      variables: {
        id: passageId,
      },
    });
  }, [passageId, fetchVerse]);

  if (loading || !data || !passageId) return null;

  return children({ verse: data.verse });
};
