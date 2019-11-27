// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/** 1st soltion */
// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let vowelsCount = 0;
//   const cleanedStr = str.toLowerCase().replace(/[^aeiou]/g, '');
//   for (let letter of cleanedStr) {
//     if (vowels.indexOf(letter) !== -1) {
//       vowelsCount++;
//     }
//   }
//   return vowelsCount;
// }

/** 2nd solution */
function vowels(str, charIndex = 0, vowelsCount = 0, cleanedStr = '') {
  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  const cleanedStrCopy = cleanedStr
    ? cleanedStr
    : str.toLowerCase().replace(/[^aeiou]/g, '');
  if (charIndex === cleanedStrCopy.length) {
    return vowelsCount;
  }

  if (vowelsArr.indexOf(cleanedStrCopy[charIndex]) !== -1) {
    vowelsCount++;
  }
  return vowels(str, charIndex + 1, vowelsCount, cleanedStrCopy);
}
vowels('AEIOU');
module.exports = vowels;
