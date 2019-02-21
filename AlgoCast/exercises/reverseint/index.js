// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   let nStr = String(n);
//   let negative = nStr.charAt(0);

//   nStr = nStr.split("").reduce((rev, char) => {
//     if (char === "-") {
//       return rev;
//     }
//     return char + rev;
//   });

//   if (negative === "-") {
//     return parseInt(`-${nStr}`);
//   } else {
//     return parseInt(nStr);
//   }
// }

function reverseInt(n) {
  const reveresed = n
    .toString()
    .split("")
    .reduce((rev, char) => char + rev);

  return parseInt(reveresed) * Math.sign(n);
}

module.exports = reverseInt;
