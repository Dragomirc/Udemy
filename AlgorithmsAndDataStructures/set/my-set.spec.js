import MySet from "./my-set";

describe("MySet class", () => {
  let set;
  beforeEach(() => {
    set = new MySet();
  });
  afterEach(() => {
    set = null;
  });
  test("MySet has an instance propery values created upon object creation", () => {
    expect(set.collection).toEqual([]);
  });
  test("add() return true if the element is added to the collection", () => {
    expect(set.add("value")).toBeTruthy();
  });
  test("add() return false if the element exists in the collection and is not added to it", () => {
    expect(set.add("value")).toBeTruthy();
    expect(set.add("value")).toBeFalsy();
  });
  test("has() returns false if the value is not in the set", () => {
    expect(set.has("value")).toBeFalsy();
  });
  test("has() returns true if the value is already in the set", () => {
    set.add("value");
    expect(set.has("value")).toBeTruthy();
  });
  test("values() should return the collection", () => {
    set.add("value");
    expect(set.values()).toEqual(["value"]);
  });
  test("size() should return the collection length", () => {
    expect(set.size()).toEqual(0);
    set.add("value");
    expect(set.size()).toEqual(1);
  });
  test("remove() should return true if the element was removed from the collection", () => {
    set.add("value");
    expect(set.remove("value")).toBeTruthy();
  });
  test("remove() should return false if the element was not removed from the collection", () => {
    set.add("value");
    expect(set.remove("value")).toBeTruthy();
    expect(set.remove("value")).toBeFalsy();
  });
  test("union() should return the union of 2 x sets", () => {
    const otherSet = new MySet();
    set.add("value1");
    otherSet.add("value2");
    expect(set.union(otherSet).values()).toEqual(["value2", "value1"]);
  });
  test("intersection() should return the intersection of 2 x sets", () => {
    const otherSet = new MySet();
    set.add("value1");
    set.add("value2");
    otherSet.add("value2");
    expect(set.intersection(otherSet).values()).toEqual(["value2"]);
  });
  test("subset() should return true if one set is a subset of the other, and false otherwise", () => {
    const otherSet = new MySet();
    set.add("value1");
    set.add("value2");
    otherSet.add("value2");
    expect(set.subset(otherSet)).toBeFalsy();
    expect(otherSet.subset(set)).toBeTruthy();
  });
  test("difference() should return the difference of the sets", () => {
    const otherSet = new MySet();
    set.add("value1");
    set.add("value2");
    otherSet.add("value2");

    expect(otherSet.difference(set).values()).toEqual(["value1"]);
  });
});
