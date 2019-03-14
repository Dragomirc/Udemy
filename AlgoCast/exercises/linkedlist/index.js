// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.node = {
      data,
      next
    };
  }
}

class LinkedList {
  constructor() {
    this.list = [];
    this.head = this.list[0];
    this.tail = this.list[this.list.length - 1];
  }
  insertFirst(data) {
    const node = new Node(data);
    this.head = node;
    this.list.unshift(head);
  }
  size() {
    return this.list.length;
  }
}

module.exports = { Node, LinkedList };
