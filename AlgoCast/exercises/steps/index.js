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
function steps(n, row = 0, stair = "") {
  if (row === n) {
    return;
  }

  if (stair.length === n) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}

module.exports = steps;
//Solution 1
// function steps(n) {
//   let initString = createInitialString(n);
//   const end = n - 1;
//   while (n > 0) {
//     initString = "#" + initString.slice(0, end);
//     console.log(initString);
//     n--;
//   }
// }
// function createInitialString(n) {
//   let spaces = "";
//   while (n > 0) {
//     spaces += " ";
//     n--;
//   }
//   return spaces;
// }

//Solution 2
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }
