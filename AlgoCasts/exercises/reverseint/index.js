// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let nString = n.toString();
  const isNumberNegative = nString[0] === '-';
  let sum = 0;
  if (isNumberNegative) {
    nString = nString.substring(1);
  }
  for (let i = nString.length - 1; i >= 0; i--) {
    sum += nString[i] * 10 ** i;
  }
  return isNumberNegative ? -sum : sum;
}

reverseInt(-5);

module.exports = reverseInt;
