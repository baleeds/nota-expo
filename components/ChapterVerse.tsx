import { BibleVerse } from '../constants/Bible';
import { VerseFragment } from '../api/__generated__/apollo-graphql';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';

interface Props {
  verse: BibleVerse;
  verseKey: string;
  bookName: string;
  chapterNumber: number;
  verseNumber: number;
  verseData: VerseFragment | undefined;
}

function conditionalStyles(...pairs: [boolean, any][]): any[] {
  return pairs.filter(([active]) => active).map(([, style]) => style);
}

export const ChapterVerse: React.FC<Props> = ({ verse, verseKey, bookName, chapterNumber, verseNumber, verseData }) => {
  const { isAnnotated = false, isAnnotatedByMe = false, isBookmarked = false } = verseData ?? {};

  return (
    <Text
      style={conditionalStyles(
        [true, styles.container],
        [isAnnotated, styles.isAnnotated],
        [isBookmarked, styles.isBookmarked],
        [isAnnotatedByMe, styles.isAnnotatedByMe],
      )}
    >
      {verse.map(({ text, quote, lineBreak }, index) => {
        const key = `${verseKey}-${index}`;
        const verseNumberDisplay = <Text style={styles.verseNumber}>{verseNumber}</Text>;

        if (text) {
          return (
            <Text key={key} style={styles.text}>
              {verseNumber && index === 0 && verseNumberDisplay}
              {text}
            </Text>
          );
        } else if (quote) {
          return (
            <Text key={key} style={styles.text}>
              {verseNumber && index === 0 && verseNumberDisplay}
              {quote}
            </Text>
          );
        } else if (lineBreak) {
          return <View key={key} style={styles.spacer} />;
        }

        return null;
      })}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  spacer: {
    marginVertical: 10,
    paddingVertical: 10,
  },
  verseNumber: {
    color: Colors.primary,
    fontSize: 18,
    lineHeight: 28,
  },
  text: {
    color: Colors.text,
    fontSize: 18,
    lineHeight: 28,
  },
  isAnnotated: {
    backgroundColor: Colors.backgroundLight,
  },
  isBookmarked: {
    backgroundColor: Colors.primary9,
  },
  isAnnotatedByMe: {
    backgroundColor: Colors.primary9,
  },
});
