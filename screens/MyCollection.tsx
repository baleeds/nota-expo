import React, { useCallback } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { AnnotationFragment, useMyCollectionAnnotationsQuery } from '../api/__generated__/apollo-graphql';
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
    <SafeAreaView style={{ flexGrow: 1 }}>
      <FlatList
        data={annotations}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={({ id }) => id}
        refreshing={loading}
        onRefresh={() => refetch()}
        renderItem={({ item }) => {
          return <FeedPost post={item} />;
        }}
        ListEmptyComponent={<EmptyOrLoading loading={loading} emptyText="Start annotating to build your collection." />}
        ListFooterComponent={
          pageInfo?.hasNextPage ? <ShowMoreFooter onPress={handleShowMore} disabled={loading} /> : null
        }
      />
    </SafeAreaView>
  );
};
