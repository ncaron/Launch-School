/*
Exercise 1

Write a constructor function Circle that takes a radius argument that can create circle objects. You should be able to call an area on the created objects to get a circle's area. Test your implementation with the following code:
*/

var Circle = function(radius) {
  this.radius = radius;
};

Circle.prototype.area = function() {
  return Math.PI * Math.pow(this.radius, 2);
};

var a = new Circle(3);
var b = new Circle(4);

console.log(a.area().toFixed(2)); // 28.27
console.log(b.area().toFixed(2)); // 50.27


/*
Exercise 2

What will the following code log out and why?

function Ninja(){
  this.swung = true;
}

var ninja = new Ninja();

Ninja.prototype.swingSword = function(){
  return this.swung;
}

console.log(ninja.swingSword());
*/

// true
// Because ninja inherits from Ninja


/*
Exercise 3

What will the following code log out and why?

function Ninja(){
  this.swung = true;
}

var ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  }
}

console.log(ninja.swingSword());
*/

// Type error
// The method was not added.


/*
Exercise 4

function Ninja(){
  this.swung = false;
}

var ninjaA = new Ninja();
var ninjaB = new Ninja();

// Add a swing method to the Ninja prototype which
// returns itself and modifies swung

console.log(ninjaA.swing().swung)      // this needs to be true
console.log(ninjaB.swing().swung)      // this needs to be true
*/

function Ninja(){
  this.swung = false;
}

var ninjaA = new Ninja();
var ninjaB = new Ninja();

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
};

console.log(ninjaA.swing().swung)      // this needs to be true
console.log(ninjaB.swing().swung)      // this needs to be true


/*
Exercise 5

In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

var ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object

console.log(ninjaB.constructor === ninjaA.constructor)    // this should be true
*/

var ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

var ninjaB = new ninjaA.constructor();

console.log(ninjaB.constructor === ninjaA.constructor)    // this should be true