// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/** 1st solution */
// function chunk(array, size) {
//   const resArr = [];
//   const copyArr = [...array];
//   for (let i = 0, k = 0; i < copyArr.length; i += size, k++) {
//     const newElem = [];
//     for (let j = 0; j < size; j++) {
//       if (copyArr[i + j]) newElem[j] = copyArr[i + j];
//     }
//     resArr[k] = [...newElem];
//   }
//   return resArr;
// }

/**2nd solution */
// function chunk(array, size) {
//   const chunked = [];
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }

/**3rd solution */
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, size + index));
    index += size;
  }
  return chunked;
}

chunk([1, 2, 3, 4], 2);
module.exports = chunk;
