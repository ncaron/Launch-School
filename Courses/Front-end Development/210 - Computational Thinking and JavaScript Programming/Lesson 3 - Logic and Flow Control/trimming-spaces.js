/*
Write a function that takes a string as an argument, and returns the string
stripped of spaces from both ends. Do not remove or alter internal spaces.

Example

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""

You may use the square brackets ([]) to access characters by index (as shown below)
and the length property to find the string length. However, you may not use any
other properties or methods from JavaScript's built-in String class.

'hello'[0];     // "h"
'hello'[4];     // "o"
*/

function trim(str) {
  var start = 0;
  var end = str.length - 1;
  var trimmed = '';

  while (str[start] === ' ') {
    start++;
  }

  while (str[end] === ' ') {
    end--;
  }

  for (var i = start; i <= end; i++) {
    trimmed += str[i];
  }

  return trimmed;
}

console.log(trim('  abc  '));
console.log(trim('abc   '));
console.log(trim(' ab c'));
console.log(trim(' a b  c'));
console.log(trim('      '));
console.log(trim(''));