import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { AnnotationFragment } from '../api/__generated__/apollo-graphql';
import { formatUserName } from '../utils/formatters/formatUserName';
import { formatDate } from '../utils/formatters/formatDate';

interface Props {
  post: AnnotationFragment;
}

export const Post: React.FC<Props> = ({ post }) => {
  const { showActionSheetWithOptions } = useActionSheet();

  const showMenu = () => {
    showActionSheetWithOptions(
      {
        options: ['View replies', 'Favorite', 'Edit', 'Delete', 'Cancel'],
        cancelButtonIndex: 4,
      },
      (index) => {},
    );
  };

  return (
    <View style={styles.contentContainer}>
      <View style={styles.contentHeader}>
        <Text style={styles.authorText}>{formatUserName(post.user)}</Text>
        <View style={styles.contentRight}>
          <TouchableOpacity style={styles.contentRightIcon}>
            <AntDesign name={post.isFavorite ? 'heart' : 'hearto'} size={20} color={Colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentRightIcon} onPress={() => showMenu()}>
            <AntDesign name={'ellipsis1'} size={20} color={Colors.secondary} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.contentBody} activeOpacity={0.8} onLongPress={() => showMenu()}>
        <Text style={styles.contentText}>{post.text}</Text>
      </TouchableOpacity>

      <View style={styles.contentFooter}>
        <Text style={styles.dateText}>{formatDate(post.insertedAt)}</Text>
        <View style={styles.contentFooterRight}>
          <TouchableOpacity style={styles.iconAndText}>
            <AntDesign name={'heart'} size={12} color={Colors.textLight} />
            <Text style={styles.iconAndTextText}>{post.numberOfFavorites} favorites</Text>
          </TouchableOpacity>
          {/*<TouchableOpacity style={styles.iconAndText}>*/}
          {/*  <MaterialCommunityIcons name={'message'} size={12} color={Colors.textLight} />*/}
          {/*  <Text style={styles.iconAndTextText}>{post.numberOfFavorites} favorites</Text>*/}
          {/*</TouchableOpacity>*/}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'column',
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    paddingTop: 4,
  },
  authorText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: Colors.text,
    paddingHorizontal: 12,
  },
  contentRight: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  contentRightIcon: {
    paddingHorizontal: 4,
  },
  contentBody: {
    paddingHorizontal: 12,
  },
  contentText: {
    fontWeight: '400',
    color: Colors.text,
    fontSize: 14,
    lineHeight: 20,
  },
  contentFooter: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20,
    color: Colors.textLight,
    paddingHorizontal: 12,
  },
  contentFooterRight: {
    paddingHorizontal: 8,
    flexDirection: 'row',
  },
  iconAndText: {
    flexDirection: 'row',
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  iconAndTextText: {
    fontSize: 12,
    lineHeight: 20,
    color: Colors.textLight,
    paddingLeft: 8,
  },
});
