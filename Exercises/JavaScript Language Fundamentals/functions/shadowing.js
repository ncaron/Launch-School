/*
What will the following code log to the console and why? Don't run the code until you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();
*/

// LOG
// This is local

// someFunction created its own scope for the variable myVar, shadowing the global scoped variable of the same name.
// Any changes done on it will have no effect on the outer scoped myVar. console.log will use the myVar that is locally
// scoped to the function.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();