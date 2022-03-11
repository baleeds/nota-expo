import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

interface Props {}

export const VerseBookmarkButton: React.FC<Props> = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const iconName = isBookmarked ? 'bookmark' : 'bookmark-outline';

  return (
    <TouchableOpacity onPress={() => setIsBookmarked((b) => !b)}>
      <Ionicons name={iconName} size={24} color={Colors.secondary} />
    </TouchableOpacity>
  );
};
