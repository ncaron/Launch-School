/*
What will the following code log to the console and why? Don't run the code until you have tried to answer.

var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);
*/

// LOG
// 7

// The function created a new variable 'a' locally scoped, changes made to it will not impact globally scoped 'a'.

var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);