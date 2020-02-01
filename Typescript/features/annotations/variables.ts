let apples = 5;

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

class Car {}

let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord = false;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true; // assigining it to a diffwerent type won't work;
  }
}

// 3) Variable who's type cannot be infered correctly
let numbers = [-10, -1, 12];
let numberAboveZero: number | boolean = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
