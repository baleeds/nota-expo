import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';

interface Props {
  label?: string;
}

export const FormGroup: React.FC<Props> = ({ label, children }) => {
  return (
    <View style={styles.formGroup}>
      <View style={styles.labelContainer}>{label && <Text style={styles.label}>{label}</Text>}</View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 16,
  },
  labelContainer: {
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
    color: Colors.text,
  },
});
