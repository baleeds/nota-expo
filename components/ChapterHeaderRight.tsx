import React from 'react';
import { ChapterStackNavProps } from '../navigation/ChapterStack';
import { useBookNavigation } from '../providers/BookNavigationProvider';
import { formatTextAddress } from '../utils/formatters/formatTextAddress';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

interface Props extends ChapterStackNavProps<'ChapterText'> {}

export const ChapterHeaderRight: React.FC<Props> = ({ navigation }) => {
  const { bookName, chapterNumber } = useBookNavigation();
  const title = formatTextAddress(bookName, chapterNumber);

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.openDrawer()}>
      <Feather name={'book-open'} size={20} color={Colors.secondary} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: Colors.secondary,
    marginLeft: 8,
  },
});
