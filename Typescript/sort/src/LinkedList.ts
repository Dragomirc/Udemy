import { Sorter } from './Sorter';

export class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}
export class LinkedList extends Sorter {
  head: Node | null = null;

  add(number: number): void {
    const node = new Node(number);
    if (!this.head) {
      this.head = node;
    } else {
      let currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = node;
    }
  }

  get length(): number {
    let length = 0;
    let currNode = this.head;
    while (currNode) {
      currNode = currNode.next;
      length++;
    }
    return length;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let currNode: Node | null = this.head;
    while (currNode) {
      console.log(` ${currNode.data} `);
      currNode = currNode.next;
    }
  }

  at(number: number): Node {
    const error = new Error('Index out of bounds.');
    if (!this.head) {
      throw error;
    }
    let index = 0;
    let currNode: Node | null = this.head;
    while (currNode) {
      if (index === number) {
        return currNode;
      }
      currNode = currNode.next;
      index++;
    }
    throw error;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty!');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }
}
