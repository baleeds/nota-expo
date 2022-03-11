import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { Colors } from '../constants/Colors';

type ButtonType = 'primary' | 'bold';

type ButtonProps = {
  type?: ButtonType;
  style?: ViewStyle;
} & TouchableOpacityProps;

export const Button: React.FC<ButtonProps> = ({ type = 'primary', style, children, ...touchableOpacityProps }) => {
  const typeStyles = typeStylesMap[type];

  return (
    <TouchableOpacity
      style={[baseStyles.container, typeStyles.container, style]}
      activeOpacity={0.6}
      {...touchableOpacityProps}
    >
      <Text style={[baseStyles.text, typeStyles.text]}>{children}</Text>
    </TouchableOpacity>
  );
};

const baseStyles = StyleSheet.create({
  container: {
    height: 36,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    lineHeight: 28,
    fontWeight: '600',
  },
});

const typeStylesMap: Record<ButtonType, { container: ViewStyle; text: TextStyle }> = {
  primary: StyleSheet.create({
    container: {
      backgroundColor: Colors.primary9,
    },
    text: {
      color: Colors.primary,
    },
  }),
  bold: StyleSheet.create({
    container: {
      backgroundColor: Colors.primary,
    },
    text: {
      color: Colors.textInverse,
    },
  }),
};
