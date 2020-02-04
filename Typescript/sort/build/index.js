"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharacterCollection_1 = require("./CharacterCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([5, 0, 7, 8, -1]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charsCollection = new CharacterCollection_1.CharacterCollection('0aXz0');
charsCollection.sort();
console.log(charsCollection.data);
var list = new LinkedList_1.LinkedList();
list.add(4);
list.add(1);
list.add(100);
list.add(-5);
list.add(5);
list.sort();
list.print();
