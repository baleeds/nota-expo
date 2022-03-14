import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import React, { Ref } from 'react';
import { Colors } from '../constants/Colors';

interface Props extends TextInputProps {
  innerRef?: Ref<TextInput>;
}

export const FormTextInput: React.FC<Props> = ({ style, innerRef, ...props }) => {
  return <TextInput style={styles.textInput} ref={innerRef} {...props} />;
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: Colors.outlineLight,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 36,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
  },
});
