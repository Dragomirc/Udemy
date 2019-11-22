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
      tempObj[currChar] = 0;
    }
  }
  const keysArray = Object.keys(tempObj);
  let maxChar = keysArray[0];
  let maxValue = tempObj[maxChar];
  for (let i = 0; i < keysArray.length; i++) {
    const currValue = tempObj[keysArray[i]];
    if (currValue > maxValue) {
      maxChar = keysArray[i];
      maxValue = tempObj[maxChar];
    }
  }
  return maxChar;
}

module.exports = maxChar;
