// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = "", column = 0) {
  if (row === n) {
    return;
  }
  if (level.length === n * 2 - 1) {
    console.log(level);
    pyramid(n, row + 1);
    return;
  }
  let midPoint = Math.floor((n * 2 - 1) / 2);
  if (midPoint - row <= column && midPoint + row >= column) {
    level += "#";
  } else {
    level += " ";
    debugger;
  }
  pyramid(n, row, level, column + 1);
}

pyramid(2);
module.exports = pyramid;
//SOLUTION 1
// function pyramid(n) {
//   let columnLength = n * 2 - 1;
//   let startPoint = Math.floor(columnLength / 2);
//   let startIndex = startPoint - 1;
//   let endIndex = startPoint + 1;
//   let initArray = Array(columnLength).map(el => " ");
//   initArray[startPoint] = "#";
//   for (let row = 0; row < n; row++) {
//     console.log(initArray.join(""));
//     initArray[startIndex++] = "#";
//     initArray[endIndex++] = "#";
//   }
// }

//SOLUTION 2
// function pyramid(n) {
//   let midPoint = Math.floor((2 * n - 1) / 2);
//   debugger;
//   for (let row = 0; row < n; row++) {
//     let level = "";
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midPoint - row <= column && midPoint + row >= column) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }