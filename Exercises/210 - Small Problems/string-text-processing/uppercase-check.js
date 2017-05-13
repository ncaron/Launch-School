/*
Write a function that takes a string argument, and returns true if all of the alphabetic characters inside the string are uppercase, false otherwise. Ignore characters that are not alphabetic.

Examples:

isUppercase('t')          // false
isUppercase('T')          // true
isUppercase('Four Score') // false
isUppercase('FOUR SCORE') // true
isUppercase('4SCORE!')    // true
isUppercase('')           // true
*/

function isUppercase(str) {
  return !str.match(/[a-z]/);
}

console.log(isUppercase('t'));
console.log(isUppercase('T'));
console.log(isUppercase('Four Score'));
console.log(isUppercase('FOUR SCORE'));
console.log(isUppercase('4SCORE!'));
console.log(isUppercase(''));