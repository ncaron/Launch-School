/*
Write a function that takes a string as an argument and returns a new string in which lowercase letters replace every uppercase and vice versa. Leave all other characters unchanged.

Example:

swapcase('CamelCase')         // 'cAMELcASE'
swapcase('Tonight on XYZ-TV') // 'tONIGHT ON xyz-tv'
*/

function swapcase(str) {
  return str.split('').map(function(char) {
    if (/[a-z]/.test(char)) {
      return char.toUpperCase();
    } else if (/[A-Z]/.test(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(swapcase('CamelCase'));
console.log(swapcase('Tonight on XYZ-TV'));