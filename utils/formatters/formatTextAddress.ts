import { BOOK_DETAILS } from '../../constants/BookDetails';

export function formatTextAddress(bookName?: string, chapterNumber?: number, verseNumber?: number): string | undefined {
  if (!bookName) return undefined;
  const bookDetails = BOOK_DETAILS[bookName];
  if (!bookDetails) return undefined;

  let address = bookDetails.displayName;
  if (chapterNumber) address += ` ${chapterNumber}`;
  if (verseNumber) address += `:${verseNumber}`;

  return address || undefined;
}
