import React, { useCallback, useMemo } from 'react';
import { ReadStackNavProps } from '../navigation/ReadStack';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { ListPost } from '../components/ListPost';
import { Colors } from '../constants/Colors';
import { Button } from '../components/Button';
import { useBookNavigation } from '../providers/BookNavigationProvider';
import { usePassage } from '../hooks/usePassage';
import { verseToText } from '../utils/verseToText';
import { useAuth } from '../providers/AuthProvider';
import {
  AnnotationFragment,
  useMyVerseAnnotationsQuery,
  useVerseAnnotationsQuery,
} from '../api/__generated__/apollo-graphql';
import { extractNodes } from '../utils/extractNodes';
import { PageSize } from '../constants/PageSize';
import produce from 'immer';
import { ShowMoreFooter } from '../components/ShowMoreFooter';

export const Verse: React.FC<ReadStackNavProps<'Verse'>> = ({ navigation, route }) => {
  const { bookName, chapterNumber } = useBookNavigation();
  const { verseNumber } = route.params;
  const { verse, passageId } = usePassage({ bookName, chapterNumber, verseNumber });
  const verseText = verseToText(verse);

  const { user } = useAuth();

  const verseAnnotations = useVerseAnnotationsQuery({
    variables: {
      verseId: passageId ?? '',
      first: PageSize.default,
    },
  });
  const myVerseAnnotations = useMyVerseAnnotationsQuery({
    variables: { verseId: passageId ?? '' },
    skip: !user,
  });

  const publicAnnotations = extractNodes<AnnotationFragment>(verseAnnotations.data?.publicAnnotations?.edges);
  const myAnnotations = extractNodes<AnnotationFragment>(myVerseAnnotations.data?.myAnnotations?.edges);

  const allAnnotations: AnnotationFragment[] | undefined = useMemo(() => {
    if (!publicAnnotations) return undefined;
    if (user) {
      if (!myAnnotations) return undefined;
      return [...myAnnotations, ...publicAnnotations];
    }
    return publicAnnotations;
  }, [user, publicAnnotations, myAnnotations]);

  const { pageInfo } = verseAnnotations.data?.publicAnnotations || {};
  const loading = verseAnnotations.loading || myVerseAnnotations.loading;

  const handleShowMore = useCallback(() => {
    if (loading || !pageInfo?.hasNextPage) {
      return;
    }

    verseAnnotations.fetchMore({
      variables: {
        first: PageSize.default,
        after: pageInfo?.endCursor,
      },
      updateQuery: (previousResult, nextResult) => {
        return produce(previousResult, (draftResult) => {
          if (!draftResult?.publicAnnotations?.edges || !nextResult?.fetchMoreResult?.publicAnnotations?.edges) {
            return previousResult;
          }

          draftResult.publicAnnotations.edges.push(...nextResult.fetchMoreResult.publicAnnotations.edges);
          draftResult.publicAnnotations.pageInfo = nextResult.fetchMoreResult.publicAnnotations.pageInfo;
        });
      },
    });
  }, [pageInfo, verseAnnotations, loading]);

  return (
    <SectionList
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ListPost post={item} />}
      sections={[
        {
          data: allAnnotations ?? [],
        },
      ]}
      ListHeaderComponent={() => (
        <>
          <View style={styles.verseContainer}>
            <Text style={styles.verseText}>{verseText}</Text>
          </View>

          <View style={styles.actionContainer}>
            <Button onPress={() => navigation.navigate('Annotate', { verseNumber: route.params.verseNumber })}>
              Write an annotation
            </Button>
          </View>
        </>
      )}
      ListFooterComponent={() => (
        <ShowMoreFooter onPress={() => handleShowMore()} disabled={verseAnnotations.loading} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  verseContainer: {
    backgroundColor: Colors.backgroundLessLight,
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verseText: {
    color: Colors.text,
    fontSize: 18,
    lineHeight: 28,
  },
  actionContainer: {
    backgroundColor: Colors.backgroundWhite,
    padding: 12,
    paddingTop: 24,
  },
});
