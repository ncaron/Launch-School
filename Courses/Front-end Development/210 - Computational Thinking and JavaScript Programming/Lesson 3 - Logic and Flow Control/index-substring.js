/*
Write two functions that each take two strings as arguments. Their expected behaviors
are as follows:

The indexOf() function searches for the first instance of a substring in firstString
that matches the string secondString, and returns the index of the character where
that substring begins.

The lastIndexOf() function searches for the last instance of a substring in
firstString that matches the string secondString, and returns the index of the
character where that substring begins.

Both functions return -1 if firstString does not contain the substring specified
by secondString.

Examples

function indexOf(firstString, secondString) {
  // statements
}

function lastIndexOf(firstString, secondString) {
  // statements
}

indexOf('Some strings', 's');      // 5
indexOf('Blue Whale', 'Whale');    // 5
indexOf('Blue Whale', 'Blute');    // -1
indexOf('Blue Whale', 'leB');      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

You may use the square brackets ([]) to access characters by index (as shown below)
and the length property to find the string length. However, you may not use any
other properties or methods from JavaScript's built-in String class.

'hello'[0];     // "h"
'hello'[4];     // "o"
*/

function indexOf(str, sub) {
  var limit = str.length - sub.length;
  var subLen = sub.length;

  for (var i = 0; i <= limit; i++) {
    var found = true;

    for (var j = 0; j < subLen; j++) {
      if (str[i + j] != sub[j]) {
        found = false;
        break;
      }
    }

    if (found) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(str, sub) {
  var subLen = sub.length;

  for (var i = str.length - sub.length; i >= 0; i--) {
    var found = true;

    for (var j = 0; j < subLen; j++) {
      if (str[i + j] != sub[j]) {
        found = false;
        break;
      }
    }

    if (found) {
      return i;
    }
  }

  return -1;
}

console.log(indexOf('Some strings', 's'));
console.log(indexOf('Blue Whale', 'Whale'));
console.log(indexOf('Blue Whale', 'Blute'));
console.log(indexOf('Blue Whale', 'leB'));

console.log(lastIndexOf('Some strings', 's'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));