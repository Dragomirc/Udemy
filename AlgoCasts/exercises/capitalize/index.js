// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const tempArr = str.split('');
  const regex = /[^\w]/;
  for (let index = 0; index < tempArr.length - 1; index++) {
    if (index === 0) {
      tempArr[index] = tempArr[index].toUpperCase();
    }
    if (regex.test(tempArr[index])) {
      tempArr[index + 1] = tempArr[index + 1].toUpperCase();
    }
  }
  return tempArr.join('');
}
capitalize('i love breakfast at bill miller bbq');

module.exports = capitalize;
