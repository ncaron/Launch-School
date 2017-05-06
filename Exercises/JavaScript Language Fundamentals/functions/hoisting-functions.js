/*
What will the following code log to the console and why? Don't run the code until you have tried to answer.

logValue();

function logValue() {
  console.log('Hello, world!');
}
*/

// LOG
// Hello, world!

// Functions are hoisted to the top of its scope, making it available anywhere within scope.

logValue();

function logValue() {
  console.log('Hello, world!');
}


/*
Let's refactor the code a bit. What does it log now? What is the hoisted equivalent of this code?

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);
*/

// LOG
// string

/*
The code looks as follows after hoisting:

function logValue() {
  console.log('Hello, world!');
}

var logValue = 'foo';

console.log(typeof logValue);


The program declares the function but before it uses console.log, it has re-assigned the string 'foo' to it.
It is no longer a type function, but a type string.
*/

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);