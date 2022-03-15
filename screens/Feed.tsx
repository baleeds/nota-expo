import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { FeedPost } from '../components/FeedPost';
import { AnnotationFragment } from '../api/__generated__/apollo-graphql';

const items: AnnotationFragment[] = [
  {
    verseId: '01001001',
    user: {
      id: '1',
      firstName: 'Benjamin',
      lastName: 'Leeds',
    },
    isFavorite: false,
    insertedAt: 'December 13, 2020',
    numberOfFavorites: 51,
    text:
      'This could be the central piece of this book. Just as hard as it must be for a just and perfect God to love broken people like us, we should love through the difficulty of each other’s shortcomings. God loves us anyways. We ought to do the same.\n' +
      'God is so much more aware and present than we can understand. We understand God to the same level that we understand heaven. It’s truth is unfathomable.',
    id: '1',
    __typename: 'Annotation',
  },
  {
    verseId: '01001001',
    user: {
      id: '1',
      firstName: 'Benjamin',
      lastName: 'Leeds',
    },
    isFavorite: false,
    insertedAt: 'December 13, 2020',
    numberOfFavorites: 51,
    text:
      'This could be the central piece of this book. Just as hard as it must be for a just and perfect God to love broken people like us, we should love through the difficulty of each other’s shortcomings. God loves us anyways. We ought to do the same.\n' +
      'God is so much more aware and present than we can understand. We understand God to the same level that we understand heaven. It’s truth is unfathomable.',
    id: '2',
    __typename: 'Annotation',
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
          return <FeedPost post={item} />;
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
