// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(
  str,
  vowelsArray = ["a", "e", "i", "o", "u"],
  count = 0,
  index = 0
) {
  if (index === str.length) {
    return count;
  }
  if (vowelsArray.indexOf(str.charAt(index).toLowerCase()) !== -1) {
    count++;
  }
  return vowels(str, vowelsArray, count, index + 1);
}
module.exports = vowels;
// SOLUTION 1
// function vowels(str) {
//   const regex = /[aeiou]/gi;
//   const matches = str.match(regex);
//   return matches ? matches.length : 0;
// }

//SOLUTION 2
// function vowels(str) {
//   const vowelsArray = ["a", "e", "i", "o", "u"];
//   let count = 0;

//   for (let char of str) {
//     if (vowelsArray.indexOf(char.toLowerCase()) !== -1) {
//       count++;
//     }
//   }
//   return count;
// }
