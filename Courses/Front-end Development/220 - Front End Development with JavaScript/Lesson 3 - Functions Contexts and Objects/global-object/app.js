/*
Exercise 1

In a browser environment, what is meant by implicit execution context?
*/

// window


/*
Exercise 2

What does the code below output?

a = 10;

console.log(window.a === a);
*/

// true


/*
Exercise 3

What does the code below output?

function func() {
  var b = 1;
}

func();

console.log(b);
*/

// reference error, b is not defined


/*
Exercise 4

What does the code below output?

function func() {
  b = 1;
}

func();

console.log(b);
*/

// 1


/*
Exercise 5

Of the variables a, b, and c below, can any be successfully deleted?

var a = 1;
b = 'Hi there';
var c = '-50';

delete a; // => ?
delete b; // => ?
delete c; // => ?
*/

// Only b can be successfully deleted as it was not declared.


/*
Exercise 6

In the code below, will we be able to delete func?

function func() {
  console.log("I'm a function!");
}

delete func; // => ?
*/

// No because it is declared.


/*
Exercise 7

Of the variables a, b, and c below, can any be deleted?

window.a = 1;
b = 2;
var c = b;

delete window.a; // => ?
delete window.b; // => ?
delete window.c; // => ?
*/

// a and b can be deleted.