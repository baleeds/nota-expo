import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useActionSheet } from '@expo/react-native-action-sheet';

export interface PostItem {
  id: string;
  verseAddress: string;
  verseText: string;
  author: string;
  isFavorite: boolean;
  isMine: boolean;
  text: string;
  date: string;
  numberOfFavorites: number;
  numberOfReplies: number;
}

interface Props {
  post: PostItem;
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
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.titleTouchable} onPress={() => {}}>
          <Text style={styles.titleText}>{post.verseAddress}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.verseContainer}>
        <Text style={styles.verseText}>{post.verseText}</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.contentHeader}>
          <Text style={styles.authorText}>{post.author}</Text>
          <View style={styles.contentRight}>
            <TouchableOpacity style={styles.contentRightIcon}>
              <AntDesign name={post.isFavorite ? 'heart' : 'hearto'} size={20} color={Colors.secondary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentRightIcon} onPress={() => showMenu()}>
              <AntDesign name={'ellipsis1'} size={20} color={Colors.secondary} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.contentBody} onLongPress={() => showMenu()}>
          <Text style={styles.contentText}>{post.text}</Text>
        </TouchableOpacity>

        <View style={styles.contentFooter}>
          <Text style={styles.dateText}>{post.date}</Text>
          <View style={styles.contentFooterRight}>
            <TouchableOpacity style={styles.iconAndText}>
              <AntDesign name={'heart'} size={12} color={Colors.textLight} />
              <Text style={styles.iconAndTextText}>{post.numberOfFavorites} favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconAndText}>
              <MaterialCommunityIcons name={'message'} size={12} color={Colors.textLight} />
              <Text style={styles.iconAndTextText}>{post.numberOfFavorites} favorites</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonPrimaryText}>Read {post.verseAddress}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundWhite,
    borderBottomColor: Colors.outlineLight,
    borderBottomWidth: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTouchable: {
    paddingHorizontal: 12,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: Colors.secondary,
  },
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
  actionContainer: {
    padding: 12,
    paddingBottom: 24,
  },
  buttonPrimary: {
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary9,
    borderRadius: 8,
  },
  buttonPrimaryText: {
    color: Colors.primary,
    fontSize: 14,
    lineHeight: 28,
    fontWeight: '600',
  },
});
