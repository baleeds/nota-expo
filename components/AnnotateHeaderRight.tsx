import React, { useCallback, useEffect } from 'react';
import { ReadStackNavProps } from '../navigation/ReadStack';
import { Button } from './Button';
import { SaveAnnotationMutation, useSaveAnnotationMutation } from '../api/__generated__/apollo-graphql';
import { usePassage } from '../hooks/usePassage';
import { useBookNavigation } from '../providers/BookNavigationProvider';
import Toast from 'react-native-toast-message';
import { attempt } from '../utils/attempt';
import { normalizeErrors } from '../utils/normalizeErrors';
import { ErrorMessages } from '../constants/ErrorMessages';
import { useAuth } from '../providers/AuthProvider';
import { verseAnnotationsQuery } from '../api/queries/verseAnnotations.query';
import { useRecoilValue } from 'recoil';
import { annotationAtom } from '../screens/Annotate';

interface Props extends ReadStackNavProps<'Annotate'> {}

export const AnnotateHeaderRight: React.FC<Props> = ({ navigation, route }) => {
  const { bookName, chapterNumber } = useBookNavigation();
  const { verseNumber } = route.params;
  const { passageId } = usePassage({ bookName, chapterNumber, verseNumber });
  const { user } = useAuth();
  const text = useRecoilValue(annotationAtom);

  useEffect(() => {
    if (!user) navigation.navigate('Verse', { verseNumber });
  }, [user]);

  const [saveAnnotation, { loading: saving }] = useSaveAnnotationMutation();

  const handlePublish = useCallback(async () => {
    if (saving) return;
    if (saving || !user) return;
    if (!passageId) throw new Error('No passage ID for annotation.');

    if (text.length <= 3) {
      Toast.show({ text1: 'Write a little more.', type: 'error' });
      return;
    }

    const [failure, result] = await attempt(
      saveAnnotation({
        variables: {
          input: {
            id: route.params.annotation?.id,
            verseId: passageId,
            text,
          },
        },
        refetchQueries: [verseAnnotationsQuery],
      }),
    );

    const { hasError, base } = normalizeErrors<SaveAnnotationMutation>(failure, result);

    const annotation = result?.data?.saveAnnotation?.result;

    if (hasError || !annotation) {
      Toast.show({ text1: base || ErrorMessages.unknown, type: 'error' });
    } else {
      Toast.show({ text1: route.params.annotation?.id ? 'Annotation saved.' : 'Annotation published.' });
      navigation.goBack();
    }
  }, [saving, passageId, saveAnnotation, text]);

  return (
    <Button type="bold" style={{ width: 100 }} onPress={handlePublish}>
      {route.params.annotation ? 'Save' : 'Publish'}
    </Button>
  );
};
