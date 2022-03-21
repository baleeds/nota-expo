import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { Post } from './Post';
import { AnnotationFragment } from '../api/__generated__/apollo-graphql';

interface Props {
  post: AnnotationFragment;
}

export const ListPost: React.FC<Props> = ({ post }) => {
  return (
    <View style={styles.container}>
      <Post post={post} />
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
});
