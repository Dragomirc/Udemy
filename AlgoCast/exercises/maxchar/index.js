// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = str.charAt(0);
  const tempObj = str.split("").reduce((obj, key) => {
    if (key in obj) {
      obj[key]++;
      if (obj[key] > obj[max]) {
        max = key;
      }
    } else {
      obj[key] = 1;
    }
    return obj;
  }, {});

  return max;
}

module.exports = maxChar;
