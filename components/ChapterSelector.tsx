import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Button,
  FlatList,
  ListView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useBookNavigation } from '../providers/BookNavigationProvider';
import { BOOK_DETAILS } from '../constants/BookDetails';
import { Colors } from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';

const bookListItems = Object.entries(BOOK_DETAILS);

export const ChapterSelector: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const { bookName, chapterNumber: selectedChapterNumber, change } = useBookNavigation();

  const [selectedBookName, setSelectedBookName] = useState<string | undefined>(bookName);
  const [showChapterSelection, setShowChapterSelection] = useState(!!selectedBookName);

  const flatListRef = useRef<ScrollView>(null);

  useEffect(() => {
    setTimeout(() => {
      if (showChapterSelection || !selectedBookName) return;

      const bookId = BOOK_DETAILS[selectedBookName]?.id;

      if (bookId) {
        flatListRef.current?.scrollTo({
          y: Math.max((bookId - 1) * 48 - 48, 0),
          animated: false,
        });
      }
    });
  }, [selectedBookName, showChapterSelection]);

  const handleBookSelection = (bookName: string | undefined) => {
    setSelectedBookName(bookName);
    setShowChapterSelection(true);
  };

  const showBookSelection = () => setShowChapterSelection(false);

  const selectChapter = (chapterNumber: number) => {
    if (!selectedBookName) return;

    change({ bookName: selectedBookName, chapterNumber });
    navigation.closeDrawer();
  };

  const selectedBookInfo = selectedBookName ? BOOK_DETAILS[selectedBookName] : undefined;
  const selectedBookNumberOfChapters = selectedBookInfo?.numberOfChapters ?? 0;

  return (
    <SafeAreaView style={styles.container}>
      {showChapterSelection ? (
        <>
          <TouchableOpacity style={styles.chapterBackButton} onPress={() => showBookSelection()}>
            <AntDesign name={'arrowleft'} size={20} color={Colors.secondary} />
            <Text style={styles.chapterBackText}>{selectedBookInfo?.displayName ?? ''}</Text>
          </TouchableOpacity>

          <ScrollView style={styles.chapterList} contentContainerStyle={styles.chapterListContent}>
            {[...Array(selectedBookNumberOfChapters)].map((_, i) => {
              const chapterNumber = i + 1;
              const isActive = bookName === selectedBookName && chapterNumber === selectedChapterNumber;

              return (
                <TouchableOpacity
                  key={chapterNumber}
                  style={[styles.chapterOption, isActive ? styles.chapterOptionActive : undefined]}
                  onPress={() => selectChapter(i + 1)}
                >
                  <Text style={[styles.chapterOptionText, isActive ? styles.chapterOptionTextActive : undefined]}>
                    {i + 1}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </>
      ) : (
        <ScrollView ref={flatListRef} style={styles.bookList} contentContainerStyle={styles.bookListContent}>
          {bookListItems.map(([bookName, bookInfo]) => {
            const isActive = bookName === selectedBookName;

            return (
              <TouchableOpacity
                key={bookName}
                style={[styles.bookOption, isActive ? styles.bookOptionActive : undefined]}
                onPress={() => handleBookSelection(bookName)}
              >
                <Text style={[styles.bookOptionText, isActive ? styles.bookOptionTextActive : undefined]}>
                  {bookInfo.displayName}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookList: {},
  bookListContent: {
    paddingTop: 40,
    paddingBottom: 200,
  },
  bookOption: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  bookOptionActive: {
    backgroundColor: Colors.secondary,
  },
  bookOptionText: {
    fontSize: 20,
    color: Colors.text,
  },
  bookOptionTextActive: {
    color: Colors.textInverse,
  },
  chapterBackButton: {
    marginTop: 20,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  chapterBackText: {
    fontSize: 20,
    color: Colors.secondary,
    marginLeft: 12,
  },
  chapterList: {},
  chapterListContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    paddingRight: 8,
  },
  chapterOption: {
    height: 60,
    width: 60,
    marginRight: 12,
    marginBottom: 12,
    borderRadius: 8,
    borderColor: Colors.secondary,
    borderWidth: 1,
    padding: 12,
  },
  chapterOptionActive: {
    backgroundColor: Colors.secondary,
  },
  chapterOptionText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.secondary,
  },
  chapterOptionTextActive: {
    color: Colors.textInverse,
  },
});
