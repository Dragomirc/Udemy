class Queue {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(this.collection);
  }
  enqueue(element) {
    this.collection.push(element);
  }
  dequeue(element) {
    return this.collection.shift(element);
  }
  front() {
    return this.collection[0];
  }
  size() {
    return this.collection.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
}
export default Queue;
