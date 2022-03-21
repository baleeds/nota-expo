import {
  Annotation,
  FavoriteAnnotationMutation,
  UnfavoriteAnnotationMutation,
  useFavoriteAnnotationMutation,
  useUnfavoriteAnnotationMutation,
} from '../api/__generated__/apollo-graphql';
import { attempt } from '../utils/attempt';
import { normalizeErrors } from '../utils/normalizeErrors';
import { ErrorMessages } from '../constants/ErrorMessages';
import { useAuth } from '../providers/AuthProvider';
import Toast from 'react-native-toast-message';

type AnnotationForFavoriteToggle = Pick<Annotation, 'isFavorite' | 'numberOfFavorites' | 'id'>;

export function useAnnotationFavoriteToggle() {
  const { user } = useAuth();
  const [favoriteAnnotationMutation] = useFavoriteAnnotationMutation();
  const [unfavoriteAnnotationMutation] = useUnfavoriteAnnotationMutation();

  const favoriteAnnotation = async (annotation?: AnnotationForFavoriteToggle) => {
    if (!annotation?.id) return;

    const [failure, result] = await attempt(
      favoriteAnnotationMutation({
        variables: {
          input: {
            annotationId: annotation.id,
          },
        },
        optimisticResponse: {
          favoriteAnnotation: {
            successful: true,
            messages: [],
            result: {
              id: annotation.id,
              isFavorite: true,
              numberOfFavorites: annotation.numberOfFavorites + 1,
              __typename: 'Annotation',
            },
            __typename: 'FavoriteAnnotationPayload',
          },
          __typename: 'RootMutationType',
        },
      }),
    );

    const { hasError, base } = normalizeErrors<FavoriteAnnotationMutation>(failure, result);

    if (hasError) {
      Toast.show({ text1: base || ErrorMessages.unknown, type: 'error' });
    }
  };

  const unfavoriteAnnotation = async (annotation?: AnnotationForFavoriteToggle) => {
    if (!annotation?.id) return;

    const [failure, result] = await attempt(
      unfavoriteAnnotationMutation({
        variables: {
          input: {
            annotationId: annotation.id,
          },
        },
        optimisticResponse: {
          unfavoriteAnnotation: {
            successful: true,
            messages: [],
            result: {
              id: annotation.id,
              isFavorite: false,
              numberOfFavorites: annotation.numberOfFavorites - 1,
              __typename: 'Annotation',
            },
            __typename: 'UnfavoriteAnnotationPayload',
          },
          __typename: 'RootMutationType',
        },
      }),
    );

    const { hasError, base } = normalizeErrors<UnfavoriteAnnotationMutation>(failure, result);

    if (hasError) {
      Toast.show({ text1: base || ErrorMessages.unknown, type: 'error' });
    }
  };

  const handleClick = async (annotation?: AnnotationForFavoriteToggle) => {
    if (!annotation) return;

    if (!user) {
      Toast.show({ text1: 'You must be logged in to do that.', type: 'info' });
      return;
    }

    const { isFavorite } = annotation || {};
    if (isFavorite) await unfavoriteAnnotation(annotation);
    else await favoriteAnnotation(annotation);
  };

  return {
    toggleIsFavorite: handleClick,
  };
}
