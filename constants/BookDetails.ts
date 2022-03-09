interface BookDetails {
  [key: string]: BookDetail;
}

export interface BookDetail {
  id: number;
  displayName: string;
  numberOfChapters: number;
}

export const BOOK_DETAILS: BookDetails = Object.freeze({
  genesis: {
    id: 1,
    displayName: 'Genesis',
    numberOfChapters: 50,
  },
  exodus: {
    id: 2,
    displayName: 'Exodus',
    numberOfChapters: 40,
  },
  leviticus: {
    id: 3,
    displayName: 'Leviticus',
    numberOfChapters: 27,
  },
  numbers: {
    id: 4,
    displayName: 'Numbers',
    numberOfChapters: 36,
  },
  deuteronomy: {
    id: 5,
    displayName: 'Deuteronomy',
    numberOfChapters: 34,
  },
  joshua: {
    id: 6,
    displayName: 'Joshua',
    numberOfChapters: 24,
  },
  judges: {
    id: 7,
    displayName: 'Judges',
    numberOfChapters: 21,
  },
  ruth: {
    id: 8,
    displayName: 'Ruth',
    numberOfChapters: 4,
  },
  '1Samuel': {
    id: 9,
    displayName: '1 Samuel',
    pathName: 'first-samuel',
    numberOfChapters: 31,
  },
  '2Samuel': {
    id: 10,
    displayName: '2 Samuel',
    numberOfChapters: 24,
  },
  '1Kings': {
    id: 11,
    displayName: '1 Kings',
    numberOfChapters: 22,
  },
  '2Kings': {
    id: 12,
    displayName: '2 Kings',
    numberOfChapters: 25,
  },
  '1Chronicles': {
    id: 13,
    displayName: '1 Chronicles',
    numberOfChapters: 29,
  },
  '2Chronicles': {
    id: 14,
    displayName: '2 Chronicles',
    numberOfChapters: 36,
  },
  ezra: {
    id: 15,
    displayName: 'Ezra',
    numberOfChapters: 10,
  },
  nehemiah: {
    id: 16,
    displayName: 'Nehemiah',
    numberOfChapters: 13,
  },
  esther: {
    id: 17,
    displayName: 'Esther',
    numberOfChapters: 10,
  },
  job: {
    id: 18,
    displayName: 'Job',
    numberOfChapters: 42,
  },
  psalms: {
    id: 19,
    displayName: 'Psalms',
    numberOfChapters: 150,
  },
  proverbs: {
    id: 20,
    displayName: 'Proverbs',
    numberOfChapters: 31,
  },
  ecclesiastes: {
    id: 21,
    displayName: 'Ecclesiastes',
    numberOfChapters: 12,
  },
  songofSolomon: {
    id: 22,
    displayName: 'Song of Solomon',
    numberOfChapters: 8,
  },
  isaiah: {
    id: 23,
    displayName: 'Isaiah',
    numberOfChapters: 66,
  },
  jeremiah: {
    id: 24,
    displayName: 'Jeremiah',
    numberOfChapters: 52,
  },
  lamentations: {
    id: 25,
    displayName: 'Lamentations',
    numberOfChapters: 5,
  },
  ezekial: {
    id: 26,
    displayName: 'Ezekial',
    numberOfChapters: 48,
  },
  daniel: {
    id: 27,
    displayName: 'Daniel',
    numberOfChapters: 12,
  },
  hosea: {
    id: 28,
    displayName: 'Hosea',
    numberOfChapters: 14,
  },
  joel: {
    id: 29,
    displayName: 'Joel',
    numberOfChapters: 3,
  },
  amos: {
    id: 30,
    displayName: 'Amos',
    numberOfChapters: 9,
  },
  obadiah: {
    id: 31,
    displayName: 'Obadiah',
    numberOfChapters: 1,
  },
  jonah: {
    id: 32,
    displayName: 'Jonah',
    numberOfChapters: 4,
  },
  micah: {
    id: 33,
    displayName: 'Micah',
    numberOfChapters: 7,
  },
  nahum: {
    id: 34,
    displayName: 'Nahum',
    numberOfChapters: 3,
  },
  habakkuk: {
    id: 35,
    displayName: 'Habakkuk',
    numberOfChapters: 3,
  },
  zephaniah: {
    id: 36,
    displayName: 'Zephaniah',
    numberOfChapters: 3,
  },
  haggai: {
    id: 37,
    displayName: 'Haggai',
    numberOfChapters: 2,
  },
  zechariah: {
    id: 38,
    displayName: 'Zechariah',
    numberOfChapters: 14,
  },
  malachi: {
    id: 39,
    displayName: 'Malachi',
    numberOfChapters: 4,
  },
  matthew: {
    id: 40,
    displayName: 'Matthew',
    numberOfChapters: 28,
  },
  mark: {
    id: 41,
    displayName: 'Mark',
    numberOfChapters: 16,
  },
  luke: {
    id: 42,
    displayName: 'Luke',
    numberOfChapters: 24,
  },
  john: {
    id: 43,
    displayName: 'John',
    numberOfChapters: 21,
  },
  acts: {
    id: 44,
    displayName: 'Acts',
    numberOfChapters: 28,
  },
  romans: {
    id: 45,
    displayName: 'Romans',
    numberOfChapters: 16,
  },
  '1Corinthians': {
    id: 46,
    displayName: '1 Corinthians',
    numberOfChapters: 16,
  },
  '2Corinthians': {
    id: 47,
    displayName: '2 Corinthians',
    numberOfChapters: 13,
  },
  galatians: {
    id: 48,
    displayName: 'Galatians',
    numberOfChapters: 6,
  },
  ephesians: {
    id: 49,
    displayName: 'Ephesians',
    numberOfChapters: 6,
  },
  philippians: {
    id: 50,
    displayName: 'Philippians',
    numberOfChapters: 4,
  },
  colossians: {
    id: 51,
    displayName: 'Colossians',
    numberOfChapters: 4,
  },
  '1Thessalonians': {
    id: 52,
    displayName: '1 Thessalonians',
    numberOfChapters: 5,
  },
  '2Thessalonians': {
    id: 53,
    displayName: '2 Thessalonians',
    numberOfChapters: 3,
  },
  '1Timothy': {
    id: 54,
    displayName: '1 Timothy',
    numberOfChapters: 6,
  },
  '2Timothy': {
    id: 55,
    displayName: '2 Timothy',
    numberOfChapters: 4,
  },
  titus: {
    id: 56,
    displayName: 'Titus',
    numberOfChapters: 3,
  },
  philemon: {
    id: 57,
    displayName: 'Philemon',
    numberOfChapters: 1,
  },
  hebrews: {
    id: 58,
    displayName: 'Hebrews',
    numberOfChapters: 13,
  },
  james: {
    id: 59,
    displayName: 'James',
    numberOfChapters: 5,
  },
  '1Peter': {
    id: 60,
    displayName: '1 Peter',
    numberOfChapters: 5,
  },
  '2Peter': {
    id: 61,
    displayName: '2 Peter',
    numberOfChapters: 3,
  },
  '1John': {
    id: 62,
    displayName: '1 John',
    numberOfChapters: 5,
  },
  '2John': {
    id: 63,
    displayName: '2 John',
    numberOfChapters: 1,
  },
  '3John': {
    id: 64,
    displayName: '3 John',
    numberOfChapters: 1,
  },
  jude: {
    id: 65,
    displayName: 'Jude',
    numberOfChapters: 1,
  },
  revelation: {
    id: 66,
    displayName: 'Revelation',
    numberOfChapters: 22,
  },
} as const);
