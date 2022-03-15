import bibleJson from './parsed-bible.json';

export interface BibleType {
  [key: string]: BibleBook;
}

export interface BibleBook {
  longName: string;
  name: string;
  shortName: string;
  chapters: BibleChapter[];
}

export type BibleChapter = BibleVerse[];

export type BibleVerse = BibleBlock[];

export type BibleBlock = {
  text?: string;
  quote?: string;
  lineBreak?: true;
};

const Bible = bibleJson as BibleType;

export { Bible };
