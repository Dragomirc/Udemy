// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const tempObj = {};
  for (let i = 0; i < str.length; i++) {
    const currChar = str.charAt(i);
    if (tempObj[currChar]) {
      tempObj[currChar] = tempObj[currChar] + 1;
    } else {
      tempObj[currChar] = 1;
    }
  }

  let maxChar = '';
  let maxValue = 0;
  for (let char in tempObj) {
    const currValue = tempObj[char];
    if (currValue > maxValue) {
      maxValue = currValue;
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
