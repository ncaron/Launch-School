/*
What will the following code log to the console and why? Don't run the code until you have tried to answer.

var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);
*/

// LOG
// [1, 2, 10]

// Passing an object passes a reference to it, changed made to the objects elements will also impact the outer object.

var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);