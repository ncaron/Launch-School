/*
What will the following code snippets log?

Code Snippet 1

var counter = 5;
var rate = 3;
console.log('The total value is ' + (counter * rate));

function counter(count) {
  // ...
}


Code Snippet 2

function counter(count) {
  // ...
}

console.log('The total value is ' + (counter * rate));

var counter = 5;
var rate = 3;


Code Snippet 3

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + (counter * rate));
*/

// LOG
// The total value is 15
// The total value is 15
// The total value is 15

// Hoisting brings functions and variables to the top of the scope. Functions go first so any variables with the same
// name as the function will overwrite its value.