// classical Inheritance
function inherits( ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype,{
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      confgurable: true
    }
  });
};

var Person = function(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log("My name is " + this.name);
}

Person.prototype.shoutName = function() {
  console.log("My name is " + this.name + "!");
}

var john = new Person("john");
var bobby = new Person("bobby");

john.sayName(); // Hi my name is john
bobby.shoutName(); // Hi my name is bobby!

var Musician = function(name, instrument) {
  Musician.super_.call(this,name);  
  this.instrument = instrument;
}

inherits(Musician, Person);

Musician.prototype.getInstrument = function(){
  console.log(this.instrument)
}

Musician.prototype.shoutName = function() {
  console.log("I'm a musician and my name is " +  this.name + "!!!!")
}

var julia = new Musician("julia", "trombone");
julia.sayName();
julia.shoutName();
julia.getInstrument();
