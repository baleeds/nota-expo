import React from 'react';
import { ReadStackNavProps } from '../navigation/ReadStack';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { PostItem } from '../components/Post';
import { ListPost } from '../components/ListPost';
import { Colors } from '../constants/Colors';
import { Button } from '../components/Button';

const items: PostItem[] = [
  {
    id: '1',
    verseAddress: 'Isaiah 55:3',
    verseText:
      'Turn your ear, and come to me.  Hear and your soul will live: and I will make an everlasting covenant with you, even the sure mercies of David.',
    author: 'Benjamin Leeds',
    isFavorite: false,
    isMine: true,
    text:
      'This could be the central piece of this book. Just as hard as it must be for a just and perfect God to love broken people like us, we should love through the difficulty of each other’s shortcomings. God loves us anyways. We ought to do the same.\n' +
      'God is so much more aware and present than we can understand. We understand God to the same level that we understand heaven. It’s truth is unfathomable.',
    date: 'December 13, 2020',
    numberOfFavorites: 51,
    numberOfReplies: 43,
  },
  {
    id: '2',
    verseAddress: 'Isaiah 55:3',
    verseText:
      'Turn your ear, and come to me.  Hear and your soul will live: and I will make an everlasting covenant with you, even the sure mercies of David.',
    author: 'Benjamin Leeds',
    isFavorite: false,
    isMine: true,
    text:
      'This could be the central piece of this book. Just as hard as it must be for a just and perfect God to love broken people like us, we should love through the difficulty of each other’s shortcomings. God loves us anyways. We ought to do the same.\n' +
      'God is so much more aware and present than we can understand. We understand God to the same level that we understand heaven. It’s truth is unfathomable.',
    date: 'December 13, 2020',
    numberOfFavorites: 51,
    numberOfReplies: 43,
  },
];

export const Verse: React.FC<ReadStackNavProps<'Verse'>> = ({ navigation, route }) => {
  const verseText =
    'Jesus answered, “Truly, truly, I say to you, unless one is born of water and the Spirit, he cannot enter the kingdom of God.';

  return (
    <SectionList
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ListPost post={item} />}
      sections={[
        {
          data: items,
        },
      ]}
      ListHeaderComponent={() => (
        <>
          <View style={styles.verseContainer}>
            <Text style={styles.verseText}>{verseText}</Text>
          </View>

          <View style={styles.actionContainer}>
            <Button onPress={() => navigation.navigate('Annotate', { verseNumber: route.params.verseNumber })}>
              Write an annotation
            </Button>
          </View>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
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
  actionContainer: {
    backgroundColor: Colors.backgroundWhite,
    padding: 12,
    paddingTop: 24,
  },
});
