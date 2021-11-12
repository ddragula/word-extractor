export default function extraction(text, threshold) {
  let words = collectWords(text);
  return convertToArray(words, threshold).sort((a, b) => b.repeats - a.repeats);
}

function collectWords(text) {
  let words = {};
  text.split(/[ /\\.,(){}\r\n]/g).forEach((rawWord) => {
    const word = rawWord.toLowerCase();
    if (isWordAcceptable(word)) {
      if (words[word]) {
        words[word]++;
      } else {
        words[word] = 1;
      }
    }
  });
  return words;
}

function isWordAcceptable(word) {
  if (word.length < 3) {
    return false;
  }

  const includesBlacklist = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "*",
    "&",
    "%",
    ";",
    ":",
    "[",
    "]",
  ];
  if (includesBlacklist.findIndex((bl) => word.includes(bl)) !== -1) {
    return false;
  }

  const wordBlacklist = ["the", "and"];
  if (wordBlacklist.includes(word)) {
    return false;
  }

  return true;
}

function convertToArray(wordsObject, threshold) {
  return Object.entries(wordsObject).reduce((prev, [key, value]) => {
    if (value > threshold) {
      prev.push({
        word: key,
        repeats: value,
      });
    }
    return prev;
  }, []);
}
