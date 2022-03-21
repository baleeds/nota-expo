import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import {
  BookmarkVerseMutation,
  UnbookmarkVerseMutation,
  useBookmarkVerseMutation,
  useUnbookmarkVerseMutation,
  VerseFragment,
} from '../api/__generated__/apollo-graphql';
import { useAuth } from '../providers/AuthProvider';
import { attempt } from '../utils/attempt';
import { normalizeErrors } from '../utils/normalizeErrors';
import { ErrorMessages } from '../constants/ErrorMessages';
import Toast from 'react-native-toast-message';

interface Props {
  verse?: VerseFragment;
}

export const VerseBookmarkButton: React.FC<Props> = ({ verse }) => {
  const { user } = useAuth();

  const [bookmarkMutation] = useBookmarkVerseMutation();
  const [unbookmarkMutation] = useUnbookmarkVerseMutation();

  const bookmark = async () => {
    if (!verse?.id) return;

    const [failure, result] = await attempt(
      bookmarkMutation({
        variables: {
          input: {
            verseId: verse.id,
          },
        },
        optimisticResponse: {
          bookmarkVerse: {
            successful: true,
            messages: [],
            result: {
              id: verse.id,
              isBookmarked: true,
              __typename: 'Verse',
            },
            __typename: 'BookmarkVersePayload',
          },
          __typename: 'RootMutationType',
        },
      }),
    );

    const { hasError, base } = normalizeErrors<BookmarkVerseMutation>(failure, result);

    if (hasError) {
      Toast.show({ text1: base || ErrorMessages.unknown, type: 'error' });
    }
  };

  const unbookmark = async () => {
    if (!verse?.id) return;

    const [failure, result] = await attempt(
      unbookmarkMutation({
        variables: {
          input: {
            verseId: verse.id,
          },
        },
        optimisticResponse: {
          unbookmarkVerse: {
            successful: true,
            messages: [],
            result: {
              id: verse.id,
              isBookmarked: false,
              __typename: 'Verse',
            },
            __typename: 'UnbookmarkVersePayload',
          },
          __typename: 'RootMutationType',
        },
      }),
    );

    const { hasError, base } = normalizeErrors<UnbookmarkVerseMutation>(failure, result);

    if (hasError) {
      Toast.show({ text1: base || ErrorMessages.unknown, type: 'error' });
    }
  };

  const handleClick = async () => {
    if (!verse) return;

    if (!user) {
      Toast.show({ text1: 'You must be logged in to bookmark verses', type: 'info' });
      return;
    }

    if (verse.isBookmarked) await unbookmark();
    else await bookmark();
  };

  if (!verse) return null;

  const iconName = verse.isBookmarked ? 'bookmark' : 'bookmark-outline';

  return (
    <TouchableOpacity onPress={handleClick}>
      <Ionicons name={iconName} size={24} color={Colors.secondary} />
    </TouchableOpacity>
  );
};
