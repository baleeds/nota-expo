import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import React, { Ref } from 'react';
import { Colors } from '../constants/Colors';

interface Props extends TextInputProps {
  innerRef?: Ref<TextInput>;
  errorMessage?: string;
  touched?: boolean;
}

export const FormTextInput: React.FC<Props> = ({ style, innerRef, errorMessage, touched = false, ...props }) => {
  return (
    <>
      <TextInput style={styles.textInput} ref={innerRef} {...props} />
      {errorMessage && touched && (
        <View style={styles.errorMessage}>
          <Text style={styles.errorMessageText}>{errorMessage}</Text>
        </View>
      )}
    </>
  );
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
  errorMessage: {
    marginTop: 4,
  },
  errorMessageText: {
    fontSize: 14,
    lineHeight: 17,
    color: Colors.textError,
    fontWeight: '500',
  },
});
