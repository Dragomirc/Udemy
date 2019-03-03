// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.sOne = new Stack();
    this.sTwo = new Stack();
  }
  add(element) {
    this.sOne.push(element);
  }
  remove() {
    while (this.sOne.peek()) {
      this.sTwo.push(this.sOne.pop());
    }
    let removedEl = this.sTwo.pop();
    while (this.sTwo.peek()) {
      this.sOne.push(this.sTwo.pop());
    }

    return removedEl;
  }
  peek() {
    while (this.sOne.peek()) {
      this.sTwo.push(this.sOne.pop());
    }
    let peekedEl = this.sTwo.peek();
    while (this.sTwo.peek()) {
      this.sOne.push(this.sTwo.pop());
    }
    return peekedEl;
  }
}

module.exports = Queue;
