// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  return str.split("").reduce((acc, curr) => curr + acc, "");
}

module.exports = reverse;

// function reverse(str) {
//   let localStrArr = str.split("");
//   let tempArray = [];
//   localStrArr.forEach(char => {
//     tempArray.unshift(char);
//   });
//   return tempArray.join("");
// }
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }
// function reverse(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }
