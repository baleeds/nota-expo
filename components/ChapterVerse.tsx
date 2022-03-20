import { BibleVerse } from '../constants/Bible';
import { VerseFragment } from '../api/__generated__/apollo-graphql';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';

interface Props {
  verse: BibleVerse;
  verseKey: string;
  verseNumber: number;
  verseData: VerseFragment | undefined;
  onPress?: () => void;
}

function conditionalStyles(...pairs: [boolean, any][]): any[] {
  return pairs.filter(([active]) => active).map(([, style]) => style);
}

export const ChapterVerse: React.FC<Props> = ({ verse, verseKey, verseNumber, verseData, onPress }) => {
  const { isAnnotated = false, isAnnotatedByMe = false, isBookmarked = false } = verseData ?? {};

  return (
    <Text
      onPress={onPress}
      style={conditionalStyles(
        [true, styles.container],
        [isAnnotated, styles.isAnnotated],
        [isBookmarked, styles.isBookmarked],
        [isAnnotatedByMe, styles.isAnnotatedByMe],
      )}
    >
      {verse.map(({ text, quote, lineBreak }, index) => {
        const key = `${verseKey}-${index}`;
        const verseNumberDisplay = <Text style={styles.verseNumber}> {verseNumber} </Text>;

        if (text) {
          return (
            <Text key={key} style={styles.text}>
              {verseNumber && index === 0 && verseNumberDisplay}
              {text}
            </Text>
          );
        } else if (quote) {
          return (
            <Text key={key}>
              <View style={styles.quoteText}>
                <Text style={styles.text}>
                  {verseNumber && index === 0 && verseNumberDisplay}
                  {quote}
                </Text>
              </View>
            </Text>
          );
        } else if (lineBreak) {
          return <Text key={key}>{'\n\n'}</Text>;
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
  verseNumber: {
    color: Colors.primary,
    fontSize: 14,
    lineHeight: 30,
    fontWeight: '500',
  },
  text: {
    color: Colors.text,
    fontSize: 18,
    lineHeight: 30,
  },
  quoteText: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  isAnnotated: {
    backgroundColor: Colors.backgroundLessLight,
  },
  isBookmarked: {
    backgroundColor: Colors.secondary10,
  },
  isAnnotatedByMe: {
    backgroundColor: Colors.primary9,
  },
});
