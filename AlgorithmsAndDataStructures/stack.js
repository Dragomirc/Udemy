export default class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }
  //Adds a value on the end of the Stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  //Removes and return the value on the end of the stack
  pop() {
    if (this.count === 0) {
      return undefined;
    }
    const result = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return result;
  }
  size() {
    return this.count;
  }
  peek() {
    if (this.count === 0) {
      return undefined;
    }
    const result = this.storage[this.count - 1];
    return result;
  }
}

export const isPalindrome = word => {
  const stack = new Stack();
  let reverseWord;
  //put letter of words on the stack
  for (var i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }
  //pop off the stack in reverse order
  for (var i = 0; i < word.length; i++) {
    reverseWord += stack.pop();
  }
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
};
