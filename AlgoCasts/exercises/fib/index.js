// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/** 1st solution */
// function fib(n) {
//   const resArr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     resArr[i] = resArr[i - 1] + resArr[i - 2];
//   }
//   return resArr[n];
// }

/** 2nd solution */
// function fib(n, i = 2, resArr = [0, 1]) {
//   if (i <= n) {
//     resArr[i] = resArr[i - 1] + resArr[i - 2];
//     return fib(n, i + 1, resArr);
//   }
//   return resArr[n];
// }

/**3rd solution */
function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return slowFib(n - 1) + slowFib(n - 2);
}

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (!cache[args]) {
      cache[args] = fn.apply(this, args);
    }
    return cache[args];
  };
}

const fib = memoize(slowFib);

module.exports = fib;
