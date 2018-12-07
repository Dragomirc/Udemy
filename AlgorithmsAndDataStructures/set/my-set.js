class MySet {
  constructor() {
    this.collection = [];
  }
  has(element) {
    if (this.collection.indexOf(element) !== -1) {
      return true;
    }
    return false;
  }
  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }
  values() {
    return this.collection;
  }
  size() {
    return this.collection.length;
  }
  remove(element) {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }
  union(otherSet) {
    const unionSet = new MySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    secondSet.forEach(element => {
      unionSet.add(element);
    });
    firstSet.forEach(element => {
      unionSet.add(element);
    });
    return unionSet;
  }
  intersection(otherSet) {
    const intersectionSet = new MySet();
    const firstSet = this.values();
    firstSet.forEach(element => {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });
    return intersectionSet;
  }
  subset(otherSet) {
    const firstSet = this.values();
    const secondSet = otherSet.values();
    const result = firstSet.every(element => {
      return secondSet.indexOf(element) !== -1;
    });
    return result;
  }
  difference(otherSet) {
    const differenceSet = new MySet();
    const firstSetValues = this.values();
    const secondSetValues = otherSet.values();
    const biggestSetValues =
      this.size() > otherSet.size() ? firstSetValues : secondSetValues;
    const smallestSet = this.size() > otherSet.size() ? otherSet : this;
    biggestSetValues.forEach(element => {
      if (!smallestSet.has(element)) {
        differenceSet.add(element);
      }
    });
    return differenceSet;
  }
}
export default MySet;
