function checkIsString(text) {
  if (text == undefined) {
    throw "The string is undefined";
  }

  if (typeof text != "string") {
    throw "The parameter passed must be a string";
  }
}

function totalLetters(text) {
  let letters = text.replace(/\s/g, '');
  let numLetters = letters.length;

  return numLetters + ' (' + letters + ')';
}

function totalWords(text) {
  let words = text.split(' ');
  let numWords = words.length;

  return `${numWords} ([${words}] is ${numWords} words)`;
}

function uniqueWords(text) {
  let words = text.split(' ');
  let uniqueWords = new Set(words);
  let numUniqueWords = uniqueWords.size;
  let uniqueWordsArr = Array.from(uniqueWords);

  return `${numUniqueWords} (${uniqueWordsArr})`;
}

function longWords(text) {
  let words = text.split(' ');
  let numWords = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 6) {
      numWords ++;
    }
  }

  return numWords;
}

function averageWordLength(text) {
  let words = text.split(' ');
  let numWords = words.length;

  let letters = text.replace(/\s/g, '');
  let numLetters = letters.length;

  return numLetters / numWords;
}

// TODO - fix this function
function wordOccurences(text) {
  let words = text.split(' ');
  let uniqueWords = new Set(words);
  let uniqueWordsArr = Array.from(uniqueWords);
  let numWords = uniqueWordsArr.length;
  let wordOccurences = {};
  let returnStr = "";

  // for (var i = 0; i < numWords; ++i) {
  //   returnStr += uniqueWordsArr[i];
  // }
  // return returnStr;

  for (var i = 0; i < numWords; i++) {
    wordOccurences[uniqueWordsArr[i]] = 0;
  }

// TODO - issue with updating wordOccurences from 0
  numWords = words.length;
  for (var i = 0; i < numWords; i++) {
    let currentWord = uniqueWords[i];
    let count = 0;
    if (wordOccurences[currentWord] == 0) {
      for (var j = i; j < numWords; i++) {
        if (words[i] == currentWord) {
          count++;
        }
      }
      wordOccurences[currentWord] = count;
    }
  }

  return wordOccurences;
}

module.exports = {
  description: "Text metric functions for lab 3",

  simplify: (text) => {
    try {
      checkIsString(text);
    } catch(err) {
      console.log(err);
      return "An error caused this function to end prematurely";
    }

    // Convert text to lowercase
    let lowerText = text.toLowerCase();

    // Remove all characters but letters and whitespace
    let simpleText = lowerText.replace(/[^A-Za-z0-9\s]/g,'');

    // Convert all whitespace to simple spaces (new lines, tabs)
    simpleText = simpleText.replace('\t',' ');
    simpleText = simpleText.replace('\n',' ');

    // Convert all duplicate spaces to single spaces
    simpleText = simpleText.replace(/ +(?= )/g,'');

    // Trim whitespace off start and end of Text
    simpleText = simpleText.replace(/^\s+/g,'');

    simpleText = simpleText.replace(/\s+$/g, '');
    // Return result
    return simpleText;
  },

  createMetrics: (text) => {
    checkIsString(text);

    let simpleText = text;
    let obj = {
      totalLetters : totalLetters(simpleText),
      totalWords : totalWords(simpleText),
      uniqueWords : uniqueWords(simpleText),
      longWords : longWords(simpleText),
      averageWordLength : averageWordLength(simpleText),
      wordOccurences : wordOccurences(simpleText)
    }
    return obj;
  }
}
