import text from './eng-web.usfx';

const removeNewLines = str => str.replace(/(\r\n|\n|\r)/gm, '');

const formatBookNameForId = name => {
  const firstLetter = name.charAt(0).toLowerCase();

  const nonSpacedName = name.substr(1).replace(/\s/g, '');

  return `${firstLetter}${nonSpacedName}`;
};

const LINE_BREAK = { lineBreak: true };

const verseHasRealContent = verse =>
  verse.filter(line => !line.lineBreak).length > 0;

const closeVerse = (workingVerse, workingChapter) => {
  if (workingVerse.length > 0 && verseHasRealContent(workingVerse))
    workingChapter.push([...workingVerse]);

  workingVerse.splice(0, workingVerse.length);
};

const closeChapter = (workingVerse, workingChapter, chapters) => {
  closeVerse(workingVerse, workingChapter);

  if (workingChapter.length > 0) chapters.push([...workingChapter]);

  workingChapter.splice(0, workingChapter.length);
};

const getParsedChapters = book => {
  const chapters = [];
  let workingChapter = [];
  let workingVerse = [];

  book.childNodes.forEach(childNode =>
    handleChildNode(childNode, workingVerse, workingChapter, chapters)
  );

  closeChapter(workingVerse, workingChapter, chapters);

  chapters.splice(0, 1);

  return chapters;
};

const ensureLineBreakAfterP = (workingVerse, workingChapter) => {
  if (workingVerse.length > 0) {
    workingVerse.push(LINE_BREAK);
    return;
  }

  const previousVerse = workingChapter[workingChapter.length - 1];
  if (!previousVerse) return;

  const previousVerseLastLine = previousVerse[previousVerse.length - 1];
  if (previousVerseLastLine && previousVerseLastLine.lineBreak) return;

  previousVerse.push(LINE_BREAK);
};

const isLatestVerseLineBreak = workingVerse => {
  if (!workingVerse) return false;
  const latestVerseLine = workingVerse[workingVerse.length - 1];
  if (latestVerseLine && latestVerseLine.lineBreak) return true;
};

const ensureLineBreakBeforeP = (workingVerse, workingChapter) => {
  if (workingVerse.length > 0 && !isLatestVerseLineBreak) {
    workingVerse.push(LINE_BREAK);
    return;
  }

  const previousVerse = workingChapter[workingChapter.length - 1];
  if (!previousVerse) return;

  const previousVerseLastLine = previousVerse[previousVerse.length - 1];
  if (previousVerseLastLine && previousVerseLastLine.lineBreak) return;

  previousVerse.push(LINE_BREAK);
};

const CHAPTER_TAG = 'c';
const PARAGRAPH_TAG = 'p';
const QUOTE_TAG = 'q';
const JESUS_QUOTE_TAG = 'wj';
const VERSE_END_TAG = 've';

const handleChildNode = (
  node,
  workingVerse,
  workingChapter,
  chapters,
  isQuote = false
) => {
  const { tagName } = node;

  if (tagName === CHAPTER_TAG) {
    closeChapter(workingVerse, workingChapter, chapters);
  } else if (tagName === PARAGRAPH_TAG) {
    // if (!isPreviousLineBreak(workingVerse, workingChapter)) workingVerse.push(LINE_BREAK);
    ensureLineBreakBeforeP(workingVerse, workingChapter);
    node.childNodes.forEach(childNode =>
      handleChildNode(
        childNode,
        workingVerse,
        workingChapter,
        chapters,
        isQuote
      )
    );
    ensureLineBreakAfterP(workingVerse, workingChapter);
  } else if (tagName === QUOTE_TAG || tagName === JESUS_QUOTE_TAG) {
    node.childNodes.forEach(childNode =>
      handleChildNode(childNode, workingVerse, workingChapter, chapters, true)
    );
    // ensureLineBreakAfterP(workingVerse, workingChapter);
  } else if (tagName === VERSE_END_TAG) {
    closeVerse(workingVerse, workingChapter);
  } else if (!tagName) {
    const text = removeNewLines(node.textContent);

    if (text === '') return;

    workingVerse.push(isQuote ? { quote: text } : { text });
  }
};

const getParsedBook = (book, index) => {
  const bookJson = {};

  const tocs = book.querySelectorAll('toc');

  bookJson.longName = removeNewLines(tocs[0].textContent);
  bookJson.name = removeNewLines(tocs[1].textContent);
  bookJson.shortName = removeNewLines(tocs[2].textContent);

  bookJson.chapters = getParsedChapters(book);

  return bookJson;
};

const parseBible = () => {
  const parser = new DOMParser().parseFromString(text, 'text/xml');
  window.og = parser;

  const books = parser.querySelectorAll('book');

  const bibleJson = {};

  books.forEach((book, index) => {
    const bookJson = getParsedBook(book, index);
    bibleJson[formatBookNameForId(bookJson.name)] = bookJson;
  });

  window.jude = books[63];

  console.log(bibleJson);

  return bibleJson;
};

export default parseBible();
