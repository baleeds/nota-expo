import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { Post } from './Post';
import { Button } from './Button';
import { usePassage } from '../hooks/usePassage';
import { verseIdToPassageInfo } from '../utils/verseIdToPassageInfo';
import { verseToText } from '../utils/verseToText';
import { formatTextAddress } from '../utils/formatters/formatTextAddress';
import { AnnotationFragment } from '../api/__generated__/apollo-graphql';

interface Props {
  post: AnnotationFragment;
}

export const FeedPost: React.FC<Props> = ({ post }) => {
  const passageInfo = verseIdToPassageInfo(post.verseId);
  const { verse, fullName, bookName, chapterNumber } = usePassage(passageInfo);
  const verseText = verseToText(verse);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.titleTouchable} onPress={() => {}}>
          <Text style={styles.titleText}>{fullName}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.verseContainer}>
        <Text style={styles.verseText}>{verseText}</Text>
      </View>

      <View style={styles.contentContainer}>
        <Post post={post} />
      </View>

      <View style={styles.actionContainer}>
        <Button>Read {formatTextAddress(bookName, chapterNumber)}</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundWhite,
    borderBottomColor: Colors.outlineLight,
    borderBottomWidth: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTouchable: {
    paddingHorizontal: 12,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: Colors.secondary,
  },
  verseContainer: {
    backgroundColor: Colors.backgroundLessLight,
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verseText: {
    color: Colors.text,
    fontSize: 18,
    lineHeight: 28,
  },
  contentContainer: {
    flexDirection: 'column',
  },
  actionContainer: {
    padding: 12,
    paddingBottom: 24,
  },
  buttonPrimary: {},
  buttonPrimaryText: {},
});
