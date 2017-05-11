/*
Write a function that takes one argument, a positive integer, and returns a string of alternating 1s and 0s, always
starting with 1. The length of the string should match the given integer.

Examples:

stringy(6) // '101010'
stringy(9) // '101010101'
stringy(4) // '1010'
stringy(7) // '1010101'
*/

function stringy(len) {
  var stringy = '';
  var i;

  for (i = 0; i < len; i += 1) {
    if (i % 2 === 0) {
      stringy += '1';
    } else {
      stringy += '0';
    }
  }

  return stringy;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));