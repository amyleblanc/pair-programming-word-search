/** @format */
const verticalArray = (letters) => {
  let newLetters = [];

  for (let i = 0; i < letters[0].length; i++) {
    newLetters.push([]);
  }

  for (let j = 0; j < letters.length; j++) {
    for (let k = 0; k < letters[j].length; k++) {
      newLetters[k].push(letters[j][k]);
    }
  }

  console.log(newLetters);
  return newLetters;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return undefined;
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = verticalArray(letters).map((ls) => ls.join(""));
  for (let array of horizontalJoin) {
    if (array.includes(word)) {
      return true;
    }
  }
  for (let array of verticalJoin) {
    if (array.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;

//pair programming exercise Paola & Amy Nov 17 - 18, 2021