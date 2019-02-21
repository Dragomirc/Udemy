// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = "";
  str.split("").forEach((char, index, arr) => {
    if (!arr[index - 1] || arr[index - 1] === " ") {
      result += char.toUpperCase();
    } else {
      result += char;
    }
  });
  return result;
}

module.exports = capitalize;

// function capitalize(str) {
//   return str
//     .split(" ")
//     .map(word => {
//       const firstChar = word.charAt(0);
//       return word.replace(firstChar, firstChar.toUpperCase());
//     })
//     .join(" ");
// }
