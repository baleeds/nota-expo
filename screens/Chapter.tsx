import React from 'react';
import { Button, Text, View } from 'react-native';
import { ChapterStackNavProps } from '../navigation/ChapterStack';

interface Props extends ChapterStackNavProps<'ChapterText'> {}

export const Chapter: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Chapter</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Go to verse" onPress={() => navigation.navigate('Verse', { verseId: 2 })} />
    </View>
  );
};
