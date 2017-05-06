/*
What will the following code log to the console and why? Don't run the code until you have tried to answer.

console.log(a);

var a = 1;
*/

// LOG
// undefined

/*
Because of hoisting, the program looks like this:

var a;
console.log(a);
a = 1;


When console.log(a) is executed, it has not yet been defined.
*/

console.log(a);

var a = 1;