import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import { Button } from './Button';

interface Props extends TouchableOpacityProps {}

export const ShowMoreFooter: React.FC<Props> = (props) => {
  return (
    <View style={{ padding: 30 }}>
      <Button {...props} style={undefined} type="ghostSecondary">
        Show more
      </Button>
    </View>
  );
};
