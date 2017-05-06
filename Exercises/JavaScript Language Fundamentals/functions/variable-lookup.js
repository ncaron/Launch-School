/*
What will the following code log to the console and why? Don't run the code until you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();
*/

// LOG
// This is global

// someFunction can access the global variable, as long as it doesn't create its own scope for a variable of the same
// name and setting it to a different value.

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();