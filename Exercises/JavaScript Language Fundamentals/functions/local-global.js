/*
What will the following code log to the console and why? Don't run the code until you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();

console.log(myVar);
*/

// LOG
// This is global

// someFunction created its own variable scope, any changes to it will have no effect on the global of the same name.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();

console.log(myVar);