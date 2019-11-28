// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const resArr = [];
  let index = 0;
  while (index < n) {
    resArr.push([]);
    index++;
  }
  let start = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      resArr[startRow][i] = start;
      start++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      resArr[i][endCol] = start;
      start++;
    }
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
      resArr[endRow][i] = start;
      start++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      resArr[i][startCol] = start;
      start++;
    }
    startCol++;
  }
  return resArr;
}
matrix(3);
module.exports = matrix;
