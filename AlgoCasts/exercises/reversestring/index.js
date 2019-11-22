// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /** 1st solution */
  //   return str
  //     .split('')
  //     .reverse()
  //     .join('');

  /** 2nd solution */
  //   let tempArr = str.split('');
  //   const midLen = Math.ceil(tempArr.length / 2);
  //   for (let i = 0; i < midLen; i++) {
  //     const temp = tempArr[i];
  //     tempArr[i] = tempArr[tempArr.length - 1 - i];
  //     tempArr[tempArr.length - 1 - i] = temp;
  //   }
  //   return tempArr.join('');

  /** 3rd solution */
  let newStr = '';
  str.split('').forEach(char => {
    debugger;
    newStr = char + newStr;
  });
  return newStr;
}

reverse('sosipisos');

module.exports = reverse;
