// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/** 1st solution */
// function palindrome(str) {
//   const reversedStr = str
//     .split('')
//     .reverse()
//     .join('');
//   return str === reversedStr;
// }

/**2nd solution */
function palindrome(str) {
  const tempArr = str.split('');
  const midLen = Math.floor(tempArr.length / 2);
  for (let i = 0; i < midLen; i++) {
    if (tempArr[i] !== tempArr[tempArr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = palindrome;
