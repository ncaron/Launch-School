/*
What will the following code log to the console and why? Don't run the code until you have tried to answer.

var a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);
*/

// LOG
// 7

// JavaScript is pass by value. (Except for objects)
// Passing the primitive number to the function creates a new variable with the same value, any changed made to it will
// not change the outer variable.

var a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);