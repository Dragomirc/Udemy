import Queue from "./queue";

describe("Queue", () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });
  afterEach(() => {
    queue = null;
  });
  test("enqeue() adds an element to the end of the queue", () => {
    queue.enqueue("element");
    expect(queue.dequeue()).toEqual("element");
  });
  test("dequeue() removes and return the first element the queue", () => {
    queue.enqueue("firstElementIn");
    queue.enqueue("lastElmentIn");
    expect(queue.dequeue()).toEqual("firstElementIn");
  });
  test("front() returns the first element in the queue", () => {
    queue.enqueue("firstElementIn");
    expect(queue.front()).toEqual("firstElementIn");
  });
  test("size() returns the size of the queue", () => {
    expect(queue.size()).toEqual(0);
    queue.enqueue("firstElementIn");
    expect(queue.size()).toEqual(1);
  });
  test("isEmpty() returns true if the queue is empty, and false otherwise", () => {
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue("firstElementIn");
    expect(queue.isEmpty()).toBeFalsy();
  });
});
