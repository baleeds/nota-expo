﻿import { ReadStackNavProps } from '../navigation/ReadStack';
import React, { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../constants/Colors';
import Toast from 'react-native-toast-message';
import { atom, useRecoilState } from 'recoil';

interface Props extends ReadStackNavProps<'Annotate'> {}

const HOW_LONG_IT_TAKES_TO_ANIMATE_THE_SCREEN_CHANGE = 600;

export const annotationAtom = atom({
  key: 'Annotation Editor',
  default: '',
});

export const Annotate: React.FC<Props> = ({ navigation, route }) => {
  const [value, setValue] = useRecoilState(annotationAtom);

  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, HOW_LONG_IT_TAKES_TO_ANIMATE_THE_SCREEN_CHANGE);

    return () => {
      setValue('');
    };
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={60}>
      <View>
        <Text>{value}</Text>
      </View>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Let it fly..."
        multiline={true}
        scrollEnabled={true}
        value={value}
        onChangeText={setValue}
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
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 24,
    fontSize: 20,
    lineHeight: 28,
    color: Colors.text,
  },
});
