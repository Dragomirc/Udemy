// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let currRecord = this.head;
    while (currRecord) {
      count++;
      currRecord = currRecord.next;
    }
    return count;
  }
  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    let tail = this.head;
    while (node) {
      if (!node.next) {
        tail = node;
      }
      node = node.next;
    }
    return tail;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    let node = this.head;
    if (this.head && !this.head.next) {
      this.head = null;
      return;
    }
    while (node) {
      if (node.next && !node.next.next) {
        node.next = null;
      }
      node = node.next;
    }
  }

  insertLast(record) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(record);
    } else {
      this.head = new Node(record);
    }
  }

  getAt(index) {
    let count = 0;
    let node = this.head;
    while (node) {
      if (count === index) {
        return node;
      }
      count++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    let node = this.head;
    if (index === 0) {
      this.head = this.head ? this.head.next : null;
    }
    let count = 0;
    while (node) {
      if (count + 1 === index) {
        node.next = node.next ? node.next.next : null;
        return;
      }
      count++;
      node = node.next;
    }
  }
  insertAt(record, index) {
    if (index === 0) {
      this.insertFirst(record);
    }
    if (index > this.size()) {
      this.insertLast(record);
    }
    let node = this.head;
    let count = 0;
    while (node) {
      if (index - 1 === count) {
        node.next = new Node(record, this.getAt(index));
        return;
      }
      node = node.next;
      count++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
  forEach(func) {
    let node = this.head;
    let counter = 0;
    while (node) {
      func(node);
      counter++;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
