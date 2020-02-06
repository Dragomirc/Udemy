// Example of generics with classes
class ArraysOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArraysOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}
class ArraysOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const stringArray = new ArraysOfAnything(['a', 'b', 'c']);

// Example of generics with functions
function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<number>([1, 2, 3]);

//Generic constraints
interface Printable {
  print(): void;
}
class Cars {
  print() {
    console.log('car');
  }
}
class Houses {
  print() {
    console.log('house');
  }
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
printHousesOrCars<Houses>([new Houses(), new Cars()]);
