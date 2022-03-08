import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Post, PostItem } from '../components/Post';

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

export const Feed: React.FC = () => {
  return (
    <SafeAreaView style={styles.list}>
      <FlatList
        data={items}
        style={styles.list}
        keyExtractor={({ id }) => id}
        refreshing={false}
        onRefresh={() => {}}
        renderItem={({ item }) => {
          return <Post post={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
