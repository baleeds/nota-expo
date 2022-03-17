function getBlockType(block: any) {
  return Object.keys(block)[0];
}

function condenseVerse(verse: any) {
  const condensedBlocks = [];

  let previousBlockType = null;
  for (const block of verse) {
    const blockType = getBlockType(block);

    if (previousBlockType === blockType) {
      if (blockType === 'text') {
        const targetBlock = condensedBlocks[condensedBlocks.length - 1];
        if (targetBlock.text[targetBlock.text.length - 1] !== ' ' && block.text[0] !== ' ') {
          targetBlock.text += ' ';
        }
        targetBlock.text += block.text;
      } else if (blockType === 'quote') {
        const targetBlock = condensedBlocks[condensedBlocks.length - 1];
        if (targetBlock.quote[targetBlock.quote.length - 1] !== ' ' && block.quote[0] !== ' ') {
          targetBlock.quote += ' ';
        }
        targetBlock.quote += block.quote;
      }
      // Else, it's a line break and we skip the duplicate
    } else {
      previousBlockType = blockType;
      condensedBlocks.push(block);
    }
  }

  return condensedBlocks;
}

// Object.values(bible).forEach((book) => {
//   book.chapters = book.chapters.map((chapter) => chapter.map(condenseVerse));
// });
