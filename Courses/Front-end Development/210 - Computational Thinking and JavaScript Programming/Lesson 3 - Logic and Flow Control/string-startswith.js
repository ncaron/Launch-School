/*
Implement a function that determines whether a string begins with another string.
If it does, the function should return true, false otherwise.

Examples

function startsWith(string, searchString) {
  // ...
}

var str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');       // true
startsWith(str, 'We put');   // true
startsWith(str, '');         // true
startsWith(str, 'put');      // false

var longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false

You may use the square brackets ([]) to access characters by index (as shown below)
and the length property to find the string length. However, you may not use any
other properties or methods from JavaScript's built-in String class.

'hello'[0];     // "h"
'hello'[4];     // "o"
*/

function startsWith(string, searchString) {
  for (var i = 0; i < searchString.length; i++) {
    if (string[i] != searchString[i]) {
      return false;
    }
  }

  return true;
}

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));
console.log(startsWith(str, 'We put'));
console.log(startsWith(str, ''));
console.log(startsWith(str, 'put'));

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));