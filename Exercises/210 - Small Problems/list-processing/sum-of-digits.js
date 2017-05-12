/*
Write a method that takes one argument, a positive integer, and returns the sum of its digits. Do this using list processing techniques.

Examples:

sum(23);          // 5
sum(496);         // 19
sum(123456789);   // 45
*/

function sum(num) {
  return String(num).split('').map(Number).reduce(function(sum, digit) {
    return sum + digit;
  });
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));