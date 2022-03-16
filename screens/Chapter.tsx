import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { ChapterStackNavProps } from '../navigation/ChapterStack';
import { useBookNavigation } from '../providers/BookNavigationProvider';
import { usePassage } from '../hooks/usePassage';
import { ErrorMessage } from '../components/ErrorMessage';
import { useVersesForChapterQuery, VerseFragment } from '../api/__generated__/apollo-graphql';
import { ChapterVerse } from '../components/ChapterVerse';

interface Props extends ChapterStackNavProps<'ChapterText'> {}

export const Chapter: React.FC<Props> = ({ navigation }) => {
  const { bookName, chapterNumber } = useBookNavigation();

  const { chapter, bookDetails } = usePassage({ bookName, chapterNumber });

  const { data } = useVersesForChapterQuery({
    variables: {
      chapterNumber: chapterNumber ?? -1,
      bookNumber: bookDetails?.id ?? -1,
    },
  });

  if (!chapter || !bookName || !chapterNumber) {
    return <ErrorMessage message="We could not find this passage" />;
  }

  const versesData: Array<VerseFragment | undefined> = data?.verses ?? [];

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 12, paddingVertical: 30 }}>
      <Text>
        {chapter.map((verse, index) => {
          const verseKey = `readChapter-${bookName}-${chapterNumber}-${index}`;
          const verseData = versesData[index];

          return (
            <ChapterVerse
              key={verseKey}
              verseKey={verseKey}
              verse={verse}
              bookName={bookName}
              chapterNumber={chapterNumber}
              verseNumber={index + 1}
              verseData={verseData}
            />
          );
        })}
      </Text>
    </ScrollView>
  );
};
