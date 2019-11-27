// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/**1st solution */
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let string = '';
//     for (let col = 0; col < n; col++) {
//       string += col <= row ? '#' : ' ';
//     }
//     console.log(string);
//   }
// }

/**2ns solution */
function steps(n, row = 0, stair = '') {
  if (row === n) {
    return;
  }

  if (stair.length < n) {
    stair += stair.length <= row ? '#' : ' ';
    return steps(n, row, stair);
  }
  console.log(stair);
  steps(n, row + 1);
}
steps(3);
module.exports = steps;
