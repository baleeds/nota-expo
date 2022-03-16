import React, { useCallback } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { AnnotationListFragment, useMyCollectionAnnotationsQuery } from '../api/__generated__/apollo-graphql';
import { PageSize } from '../constants/PageSize';
import { extractNodes } from '../utils/extractNodes';
import produce from 'immer';
import { FeedPost } from '../components/FeedPost';
import { ShowMoreFooter } from '../components/ShowMoreFooter';
import { EmptyOrLoading } from '../components/EmptyOrLoading';

export const MyCollection: React.FC = () => {
  const { data, loading, fetchMore, refetch } = useMyCollectionAnnotationsQuery({
    variables: {
      first: PageSize.default,
    },
  });

  const annotations = extractNodes<AnnotationListFragment>(data?.myAnnotations?.edges);
  const { pageInfo } = data?.myAnnotations || {};

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
          if (!draftResult?.myAnnotations?.edges || !nextResult?.fetchMoreResult?.myAnnotations?.edges) {
            return previousResult;
          }

          draftResult.myAnnotations.edges.push(...nextResult.fetchMoreResult.myAnnotations.edges);
          draftResult.myAnnotations.pageInfo = nextResult.fetchMoreResult.myAnnotations.pageInfo;
        });
      },
    });
  }, [pageInfo, fetchMore, loading]);

  return (
    <SafeAreaView style={styles.list}>
      <FlatList
        data={annotations}
        style={styles.list}
        contentContainerStyle={{ flex: 1 }}
        keyExtractor={({ id }) => id}
        refreshing={loading}
        onRefresh={() => refetch()}
        renderItem={({ item }) => {
          return <FeedPost post={item} />;
        }}
        ListEmptyComponent={() => (
          <EmptyOrLoading loading={loading} emptyText="Start annotating to build your collection." />
        )}
        ListFooterComponent={() =>
          pageInfo?.hasNextPage ? <ShowMoreFooter onPress={handleShowMore} disabled={loading} /> : null
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
