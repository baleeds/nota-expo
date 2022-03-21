import React, { useCallback } from 'react';
import { ReadStackNavProps } from '../navigation/ReadStack';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { ListPost } from '../components/ListPost';
import { Colors } from '../constants/Colors';
import { Button } from '../components/Button';
import { useBookNavigation } from '../providers/BookNavigationProvider';
import { usePassage } from '../hooks/usePassage';
import { verseToText } from '../utils/verseToText';
import { AnnotationFragment, useVerseAnnotationsQuery } from '../api/__generated__/apollo-graphql';
import { extractNodes } from '../utils/extractNodes';
import { PageSize } from '../constants/PageSize';
import produce from 'immer';
import { ShowMoreFooter } from '../components/ShowMoreFooter';
import { useAuth } from '../providers/AuthProvider';

export const Verse: React.FC<ReadStackNavProps<'Verse'>> = ({ navigation, route }) => {
  const { bookName, chapterNumber } = useBookNavigation();
  const { verseNumber } = route.params;
  const { verse, passageId } = usePassage({ bookName, chapterNumber, verseNumber });
  const verseText = verseToText(verse);
  const { user } = useAuth();

  const { data, loading, fetchMore } = useVerseAnnotationsQuery({
    variables: {
      verseId: passageId ?? '',
      first: PageSize.default,
    },
  });

  const annotations = extractNodes<AnnotationFragment>(data?.annotations?.edges);

  const { pageInfo } = data?.annotations || {};

  const handleShowMore = useCallback(() => {
    if (loading || !pageInfo?.hasNextPage) {
      return;
    }

    fetchMore({
      variables: {
        first: PageSize.default,
        after: pageInfo?.endCursor,
      },
      updateQuery: (previousResult, nextResult) => {
        return produce(previousResult, (draftResult) => {
          if (!draftResult?.annotations?.edges || !nextResult?.fetchMoreResult?.annotations?.edges) {
            return previousResult;
          }

          draftResult.annotations.edges.push(...nextResult.fetchMoreResult.annotations.edges);
          draftResult.annotations.pageInfo = nextResult.fetchMoreResult.annotations.pageInfo;
        });
      },
    });
  }, [pageInfo, fetchMore, loading]);

  return (
    <SectionList
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ListPost post={item} />}
      sections={[
        {
          data: annotations ?? [],
        },
      ]}
      ListHeaderComponent={() => (
        <>
          <View style={styles.verseContainer}>
            <Text style={styles.verseText}>{verseText}</Text>
          </View>

          {user && (
            <View style={styles.actionContainer}>
              <Button onPress={() => navigation.navigate('Annotate', { verseNumber: route.params.verseNumber })}>
                Write an annotation
              </Button>
            </View>
          )}
        </>
      )}
      ListFooterComponent={() =>
        pageInfo?.hasNextPage ? <ShowMoreFooter onPress={() => handleShowMore()} disabled={loading} /> : null
      }
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
