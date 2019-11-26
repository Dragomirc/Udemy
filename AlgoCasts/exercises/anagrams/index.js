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
  const stringALow = stringA.toLowerCase();
  const stringBLow = stringB.toLowerCase();
  if (stringALow === stringBLow) {
    return true;
  }

  const regex = /[a-z]/g;
  const stringAArr = stringALow.match(regex) || [];
  const stringBArr = stringBLow.match(regex) || [];
  if (stringAArr.length !== stringBArr.length) {
    return false;
  }
  for (let element of stringAArr) {
    const index = stringBArr.indexOf(element);
    if (index === -1) {
      return false;
    }
    stringBArr.splice(index, 1);
  }
  return true;
}
anagrams('One one', 'One one c');
module.exports = anagrams;
