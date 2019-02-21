// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const newStringA = stringA.toLowerCase().match(/[a-z]/g);
  const newStringB = stringB.toLowerCase().match(/[a-z]/g);
  if (newStringA.length !== newStringB.length) {
    return false;
  }
  const sortedArrA = newStringA.sort();
  const sortedArrB = newStringB.sort();
  return sortedArrA.every((char, index) => char === sortedArrB[index]);
}

module.exports = anagrams;
// function anagrams(stringA, stringB) {
//   if (stringA.length !== stringB.length) {
//     return false;
//   }
//   const stringAObject = buildCharMap(stringA);
//   const stringBObject = buildCharMap(stringB);

//   for (let key in stringAObject) {
//     if (stringAObject[key] !== stringBObject[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// function buildCharMap(str) {
//   const newString = str.toLowerCase().match(/[a-z]/g);
//   return newString.reduce((obj, key) => {
//     if (obj[key]) {
//       obj[key]++;
//     } else {
//       obj[key] = 1;
//     }
//     return obj;
//   }, {});
// }
