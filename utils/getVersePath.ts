const PADDED_LENGTH = 8;

export const verseIdToSplitIds = (
  id: string,
):
  | {
      bookNumber: number;
      chapterNumber: number;
      verseNumber: number;
    }
  | undefined => {
  const paddedId = id.padStart(PADDED_LENGTH, '0');

  const bookId = paddedId.substring(0, 2);
  const chapterId = paddedId.substring(2, 5);
  const verseId = paddedId.substring(5, 8);

  const bookNumber = parseInt(bookId, 10);
  const chapterNumber = parseInt(chapterId, 10);
  const verseNumber = parseInt(verseId, 10);

  if (Number.isNaN(bookNumber) || Number.isNaN(chapterNumber) || Number.isNaN(verseNumber)) {
    return undefined;
  }

  return { bookNumber, chapterNumber, verseNumber };
};
