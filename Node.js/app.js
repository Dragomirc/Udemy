//<<<<<<<<<<<<<<<<<<<<<PROTOTYPAL INHERITACE>>>>>>>>>>>>>>>>>>>>>>>>
// function Person(firstname, lastname) {
//   this.lastname = lastname;
//   this.firstname = firstname;
// }

// Person.prototype.greet = function() {
//   console.log("Hello, " + this.firstname + " " + this.lastname);
// };
// const john = new Person("John", "Doe");
// //john.greet();
// console.log(john.__proto__);
// console.log(Person.prototype);

//<<<<<<<<<<<<<<<<<<PASS BY VALUE and PASS BY REFERENCE>>>>>>>>>>>>>>>>>>
// //Pass by value
// function change(b) {
//   b = 2;
// }
// const a = 1;
// change(a);
// console.log(a);

// //Pass by reference
// function changeObj(d) {
//   d.prop1 = function() {};
//   d.prop2 = {};
// }
// const c = {};
// changeObj(c);
// console.log(c);

//<<<<<<<<<<<<<<<<<<<<<< IIFE >>>>>>>>>>>>>>>>>>>>>>>>>>>
// const firstname = "Jane";
// (function(lastname) {
//   const firstname = "John";
//   console.log(firstname);
//   console.log(lastname);
// })("Doe");

// console.log(firstname);

//<<<<<<<<<<<<<<<<<<<<<<ES6 Classes>>>>>>>>>>>>>>>>>>>>>>
// "use strict";
// const Greetr = require("./greetr");
//const util = require("util");

// function Greetr() {
//   EventEmitter.call(this);
//   this.greeting = "Hello World";
// }

// util.inherits(Greetr, EventEmitter);

// Greetr.prototype.greet = function(data) {
//   console.log(this.greeting + ": " + data);
//   this.emit("greet", data);
// };

// const greet = new Greetr("Dragomir");

// greet.on("greet", function(data) {
//   console.log(data + " Hello!!");
// });
// greet.greet("Dragomir");

//<<<<<<<<<<<<<<<<<<<<<<<<<<<BUFFERS>>>>>>>>>>>>>>>>
// const buf = new Buffer("Hello", "utf8");
// console.log(buf);
// console.log(buf.toString());
// console.log(buf.toJSON());
// console.log(buf[2]);
// buf.write("wo");
// console.log(buf.toString());

// const buffer = new ArrayBuffer(8);
// const view = new Int32Array(buffer);
// view[0] = 5;
// view[1] = 15;
// console.log(view);
// console.log(buffer);

//<<<<<<<<<<<<<<<<<<<<<CALLBACKS>>>>>>>>>>>>>>>>>>
// function greet(callback) {
//   console.log("Hello!");
//   const data = {
//     name: "John Doe"
//   };
//   callback(data);
// }
// greet(function(data) {
//   console.log("The callback was invoked!");
//   console.log(data);
// });

// greet(function(data) {
//   console.log("A different callback was invoked!");
//   console.log(data.name);
// });

//<<<<<<<<<<<<<<<<<<<<<<<FILES and FS>>>>>>>>>>>>>>>>>>>>>>>>>
// const fs = require("fs");
// const greet = fs.readFileSync(__dirname + "/greet.txt", "utf8");
// console.log("Greet", greet);

// const greet2 = fs.readFile(__dirname + "/greet.txt", "utf8", function(
//   err,
//   data
// ) {
//   console.log("Greet2", data);
// });

//<<<<<<<<<<<<<<<<<<<<<<<<<<Streams>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const fs = require("fs");
// const readable = fs.createReadStream(__dirname + "/greet.txt", {
//   encoding: "utf8",
//   highWaterMark: 16 * 1024
// });

// const writable = fs.createWriteStream(__dirname + "/greetcopy.txt");

// readable.on("data", function(chunk) {
//   console.log(chunk.length);
//   writable.write(chunk);
// });

//<<<<<<<<<<<<<<<<<<<<<<<<PIPES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const fs = require("fs");
// const zlib = require("zlib");

// const readable = fs.createReadStream(__dirname + "/greet.txt");
// const writable = fs.createWriteStream(__dirname + "/greetcopy.txt");
// const compressed = fs.createWriteStream(__dirname + "/greet.txt.gz");
// const gzip = zlib.createGzip(); // creates a transform stream
// readable.pipe(writable);
// readable.pipe(gzip).pipe(compressed);

//<<<<<<<<<<<<<<<<<<<<<<LET'S BUILD A NODE SERVER>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const http = require("http");
// const fs = require("fs");
// http
//   .createServer(function(req, res) {
//     if (req.url === "/") {
//       fs.createReadStream(__dirname + "/index.html").pipe(res);
//     } else if (req.url === "/api") {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       const obj = {
//         firstname: "John",
//         lastname: "Doe"
//       };
//       res.end(JSON.stringify(obj));
//     } else {
//       res.writeHead(404);
//       res.end();
//     }
//   })
//   .listen(1337, "127.0.0.1");

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<EXPRESS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const apiController = require("./controllers/apiController");
const htmlController = require("./controllers/htmlController");
app.use("/assets", express.static(__dirname + "/public"));
app.set("view engine", "ejs");
htmlController(app);
apiController(app);

app.listen(PORT);
