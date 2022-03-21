import { useMemo } from 'react';
import { BOOK_DETAILS, BookDetail } from '../constants/BookDetails';
import { Bible, BibleChapter, BibleVerse } from '../constants/Bible';
import { formatTextAddress } from '../utils/formatters/formatTextAddress';

export interface PassageContext {
  bookName?: string;
  chapterNumber?: number;
  verseNumber?: number;
  bookDetails?: BookDetail;
  chapter?: BibleChapter;
  verse?: BibleVerse;
  passageId?: string;
  fullName?: string;
}

type UsePassageArgs = { bookName?: string; chapterNumber?: number; verseNumber?: number };

export function usePassage(args: UsePassageArgs | undefined): PassageContext {
  const context: PassageContext = useMemo(() => {
    if (!args) return {};

    const { bookName, chapterNumber, verseNumber } = args;

    const bookDetails = bookName ? BOOK_DETAILS[bookName] : undefined;
    const chapter =
      bookName && chapterNumber && Bible[bookName] ? Bible[bookName].chapters[chapterNumber - 1] : undefined;
    const verse = verseNumber && chapter ? chapter[verseNumber - 1] : undefined;

    const { id: bookId } = bookDetails || {};
    const paddedChapterId = `${chapterNumber}`.padStart(3, '0');
    const paddedVerseId = `${verseNumber}`.padStart(3, '0');
    const passageId = `${bookId}${paddedChapterId}${paddedVerseId}`;
    const fullName = formatTextAddress(bookName, chapterNumber, verseNumber);

    return {
      bookName,
      chapterNumber,
      verseNumber,
      bookDetails,
      chapter,
      verse,
      passageId,
      fullName,
    };
  }, [args]);

  return context;
}
