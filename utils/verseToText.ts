import { BibleVerse } from '../constants/Bible';
import { ErrorMessages } from '../constants/ErrorMessages';

export const verseToText = (verse: BibleVerse | undefined) => {
  if (!verse) return ErrorMessages.unknown;

  return verse
    ?.map(({ text, quote }) => {
      if (text) {
        return text;
      } else if (quote) {
        return quote;
      }
      return null;
    })
    .filter(Boolean)
    .join(' ');
};
