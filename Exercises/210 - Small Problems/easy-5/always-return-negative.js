/*
Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the number negative, return the original number.

Examples;

negative(5)  // -5
negative(-3) // -3
negative(0)  // -0
*/

function negative(num) {
  return -Math.abs(num);
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));


/*
An alternative solution will be to use a ternary operator. If you haven't use it, try converting the solution to make use of it.
*/

function negative2(num) {
  return num < 0 ? num : -num;
}

console.log(negative2(5));
console.log(negative2(-3));
console.log(negative2(0));