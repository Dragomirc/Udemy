import Stack from "./stack";
import { isPalindrome } from "./stack";

test("has instance values storage and count", () => {
  const stack = new Stack();
  expect(stack.count).toBe(0);
  expect(stack.storage).toEqual({});
});
test("push() adds a new key-value pair to the storage where the key is the count at that time", () => {
  const stack = new Stack();
  const value = "freeCodeCamp";
  stack.push(value);
  expect(stack.storage[stack.count - 1]).toBe("freeCodeCamp");
});
test("size() return current count", () => {
  const stack = new Stack();
  const value = "freeCodeCamp";
  stack.push(value);
  expect(stack.count).toBe(stack.size());
});
describe("pop()", () => {
  let stack;
  let value;
  beforeEach(() => {
    stack = new Stack();
    value = "freeCodeCamp";
    stack.push(value);
  });
  afterEach(() => {
    stack = null;
  });
  test("it returns undefined when the count is 0", () => {
    stack.pop();
    expect(stack.count).toEqual(0);
    expect(stack.pop()).toEqual(undefined);
  });
  test("it removes the key-value pair from the storage", () => {
    expect(stack.storage[stack.count - 1]).toEqual("freeCodeCamp");
    stack.pop();
    expect(stack.storage[stack.count - 1]).toEqual(undefined);
  });
  test("it decrements the count", () => {
    expect(stack.count).toEqual(1);
    stack.pop();
    expect(stack.storage[stack.count - 1]).toEqual(undefined);
  });
});
describe("peek()", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });
  afterEach(() => {
    stack = null;
  });
  test("it returns undefined if the storage is empty", () => {
    expect(stack.peek()).toBe(undefined);
  });
  test("it returns the last value pushed on the storage", () => {
    stack.push("freeCodecamp");
    console.log(stack.peek());
    expect(stack.peek()).toEqual("freeCodecamp");
  });
});
describe("isPalindrome()", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });
  afterEach(() => {
    stack = null;
  });
  it("should return false", () => {
    expect(isPalindrome("freeCodeCamp")).toBeFalsy();
  });
  it("should return true", () => {
    expect(isPalindrome("racecar")).toBeFalsy();
  });
});
