import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors, Shadows } from '../constants/Colors';
import { Layout } from '../constants/Layout';

export interface ToastMessageProps {
  message: string;
  type?: 'error' | 'success' | 'default';
}

const ToastMessageIcon: React.FC<Pick<ToastMessageProps, 'type'>> = ({ type }) => {
  switch (type) {
    case 'error':
      return <AntDesign name={'exclamationcircle'} color={Colors.textError} size={20} />;
    case 'success':
      return <AntDesign name={'checkcircle'} color={Colors.text} size={20} />;
    default:
      return <AntDesign name={'infocirlce'} color={Colors.text} size={20} />;
  }
};

export const ToastMessage: React.FC<ToastMessageProps> = ({ message, type }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <ToastMessageIcon type={type} />
      </View>
      <Text style={styles.message} ellipsizeMode={'tail'}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundWhite,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: Layout.window.width - 48,
    borderRadius: 12,
    ...Shadows.level1,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  message: {
    fontSize: 16,
    lineHeight: 20,
    color: Colors.text,
    fontWeight: '500',
  },
});
