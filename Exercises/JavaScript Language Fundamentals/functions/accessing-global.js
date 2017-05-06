/*
What will the following code log to the console and why? Don't run the code until you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();

console.log(myVar);
*/

// LOG
// This is local

// someFunction did not declare any variables and is not shadowing the myVar, it is instead using the global scoped
// myVar and therefore, changes made to it will have an impact on the global scope.

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();

console.log(myVar);