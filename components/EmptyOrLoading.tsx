import React from 'react';
import { FullScreenLoading } from './FullScreenLoading';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';

interface Props {
  loading: boolean;
  emptyText?: string;
}

export const EmptyOrLoading: React.FC<Props> = ({ loading, emptyText = 'Nothing here.', children }) => {
  if (loading) return <FullScreenLoading isLoading={true} />;

  return (
    <View style={styles.emptyContainer}>{children ?? <Text style={styles.emptyContainerText}>{emptyText}</Text>}</View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    flex: 1,
  },
  emptyContainerText: {
    fontSize: 16,
    lineHeight: 19,
    color: Colors.textLight,
    fontWeight: '500',
  },
});
