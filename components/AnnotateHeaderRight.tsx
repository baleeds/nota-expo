import React from 'react';
import { ReadStackNavProps } from '../navigation/ReadStack';
import { Button } from './Button';

interface Props extends ReadStackNavProps<'Annotate'> {}

export const AnnotateHeaderRight: React.FC<Props> = ({ navigation, route }) => {
  return (
    <Button
      type="bold"
      style={{ width: 100 }}
      onPress={() => navigation.navigate('Verse', { verseNumber: route.params.verseNumber })}
    >
      Publish
    </Button>
  );
};
