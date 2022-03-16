import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  message?: string;
}

export const ErrorMessage: React.FC<Props> = ({ message = 'Uh oh! Something unexpected happened.' }) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};
