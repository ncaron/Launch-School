/*
What will the following code log to the console and why? Don't run the code until you have tried to answer.

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);
*/

// LOG
// This is global

// myVar is not currently declared, using it inside of a function will create it as a global variable.

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);