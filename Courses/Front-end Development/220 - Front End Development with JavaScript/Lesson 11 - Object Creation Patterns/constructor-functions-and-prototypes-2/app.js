/*
Exercise 1

Create an object called shape that has a type property and a getType method.
Define a Triangle constructor function whose prototype is shape. Objects created with Triangle should have three own properties: a, b and c representing the sides of a triangle.
Add a new method to the prototype called getPerimeter.
Test your implementation with the following code:

var t = new Triangle(1, 2, 3);
t.constructor;                 // Triangle(a, b, c)
shape.isPrototypeOf(t);        // true
t.getPerimeter();              // 6
t.getType();                   // "triangle"
*/

var shape = {
  type: '',
  getType: function() {
    return this.type;
  },
};

function Triangle(a, b, c) {
  this.type = 'triangle';
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = shape;

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
};

Triangle.prototype.constructor = Triangle;

var t = new Triangle(1, 2, 3);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 6
console.log(t.getType());                   // "triangle"


/*
Exercise 2

Since a constructor is just a function, it can be called without the new operator, and this can lead to unexpected results and errors especially for inexperienced programmers.

Write a constructor function that can be used with or without the new operator, and return the same result in either form. Use the code below to check your solution:

function User(first, last) {
  // ...
}

var name = 'Jane Doe';
var user1 = new User('John', 'Doe');
var user2 = User('John', 'Doe');

console.log(name);        // Jane Doe
console.log(user1.name);   // John Doe
console.log(user2.name);   // John Doe
*/

function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
}

var name = 'Jane Doe';
var user1 = new User('John', 'Doe');
var user2 = User('John', 'Doe');

console.log(name);         // Jane Doe
console.log(user1.name);   // John Doe
console.log(user2.name);   // John Doe


/*
Exercise 3

Create a function that can create an object with a given object as its prototype, without using Object.create.

function createObject(obj) {
  // ...
}

var foo = {
  a: 1
};

var bar = createObject(foo);
foo.isPrototypeOf(bar);         // true
*/

function createObject(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

var foo = {
  a: 1
};

var bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true


/*
Exercise 4

Similar to the problem above, create a begetObject function that you can call on any object to create an object inherited from it:

var foo = {
  a: 1
};

var bar = foo.begetObject();
foo.isPrototypeOf(bar);         // true
*/

Object.prototype.begetObject = function() {
  function F() {}
  F.prototype = this;
  return new F();
}

var foo = {
  a: 1
};

var bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true


/*
Exercise 5

Create a function neww, so that it works like the new operator:

function neww(constructor, args) {
  // ..
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
}

var john = neww(Person, ['John', 'Doe']);
john.greeting();          // Hello, John Doe
john.constructor;         // Person(firstName, lastName) {...}
*/

function neww(constructor, args) {
  var object = Object.create(constructor.prototype);
  var result = constructor.apply(object, args);

  object.constructor = constructor;
  return result === undefined ? object : result;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
}

var john = neww(Person, ['John', 'Doe']);
john.greeting();                       // Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}