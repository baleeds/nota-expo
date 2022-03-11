import { ReadStackNavProps } from '../navigation/ReadStack';
import React, { useEffect, useRef } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import { Colors } from '../constants/Colors';

interface Props extends ReadStackNavProps<'Annotate'> {}

const HOW_LONG_IT_TAKES_TO_ANIMATE_THE_SCREEN_CHANGE = 600;

export const Annotate: React.FC<Props> = () => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, HOW_LONG_IT_TAKES_TO_ANIMATE_THE_SCREEN_CHANGE);
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={60}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Let it fly..."
        multiline={true}
        scrollEnabled={true}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    padding: 20,
    paddingTop: 24,
    fontSize: 20,
    lineHeight: 28,
    color: Colors.text,
  },
});
