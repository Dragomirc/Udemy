import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';
const numbersCollection = new NumbersCollection([5, 0, 7, 8, -1]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charsCollection = new CharacterCollection('0aXz0');
charsCollection.sort();
console.log(charsCollection.data);

const list = new LinkedList();

list.add(4);
list.add(1);
list.add(100);
list.add(-5);
list.add(5);

list.sort();
list.print();
