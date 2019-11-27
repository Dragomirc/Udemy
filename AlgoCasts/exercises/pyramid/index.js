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

/**1st solution */
// function pyramid(n) {
//   const colLen = n + n - 1;
//   const midStair = Math.floor(colLen / 2);
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let col = 0; col < colLen; col++) {
//       if (col >= midStair - row && col <= midStair + row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

/**2nd solution */
function pyramid(n, stair = '', row = 0) {
  if (row === n) {
    return;
  }
  const colLen = n + n - 1;
  const midStair = Math.floor(colLen / 2);
  const col = stair.length;
  if (col < colLen) {
    if (col >= midStair - row && col <= midStair + row) {
      stair += '#';
    } else {
      stair += ' ';
    }
    return pyramid(n, stair, row);
  }
  console.log(stair);
  pyramid(n, '', row + 1);
}
pyramid(3);
module.exports = pyramid;
