/* eslint-disable no-plusplus */
/* eslint-disable max-len */

import { toast } from 'react-toastify';

// Replace Comma
export const replaceComma = (string) => string.replace(/,/g, ' \u00B7 ');

// Short by date
export const sortByDate = (a, b) => new Date(b.frontmatter.created_at) - new Date(a.frontmatter.created_at);

// Reading Counter
const wordsPerMinute = 225;

const isWord = (str) => {
  let alphaNumericFound = false;
  for (let index = 0; index < str.length; index++) {
    const code = str.charCodeAt(index);
    if ((code > 47 && code < 58) // numeric (0-9)
      || (code > 64 && code < 91) // upper alpha (A-Z)
      || (code > 96 && code < 123)) { // lower alpha (a-z)
      alphaNumericFound = true;
      return alphaNumericFound;
    }
  }
  return alphaNumericFound;
};

const wordCounter = (input) => {
  const text = input.split(/\s+/);
  let wordCount = 0;
  for (let index = 0; index < text.length; index++) {
    if (text[index] !== ' ' && isWord(text[index])) {
      wordCount++;
    }
  }
  return wordCount;
};

export const readingTime = (text) => Math.ceil(wordCounter(text) / wordsPerMinute);

export const copyText = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => toast('✅ Text copied to clipboard'))
    .catch((err) => console.error('Error copying text: ', err));
};
