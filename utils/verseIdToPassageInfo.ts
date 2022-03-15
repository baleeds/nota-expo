import { BOOK_DETAILS, BookDetail } from '../constants/BookDetails';

const PADDED_LENGTH = 8;

export interface PassageInfo {
  bookName: string;
  bookDetails: BookDetail;
  bookNumber: number;
  chapterNumber: number;
  verseNumber: number;
}

export const verseIdToPassageInfo = (id: string): PassageInfo | undefined => {
  const paddedId = id.padStart(PADDED_LENGTH, '0');

  const bookId = paddedId.substring(0, 2);
  const chapterId = paddedId.substring(2, 5);
  const verseId = paddedId.substring(5, 8);

  const bookNumber = parseInt(bookId, 10);
  const chapterNumber = parseInt(chapterId, 10);
  const verseNumber = parseInt(verseId, 10);

  const [bookName, bookDetails] = Object.entries(BOOK_DETAILS).find(([, details]) => details.id === bookNumber) ?? [];

  if (
    Number.isNaN(bookNumber) ||
    Number.isNaN(chapterNumber) ||
    Number.isNaN(verseNumber) ||
    !bookName ||
    !bookDetails
  ) {
    return undefined;
  }

  return { bookNumber, chapterNumber, verseNumber, bookName, bookDetails };
};
