/*
Write a function that returns a substring of a string based on a starting index
and length.

Examples

function substr(string, start, length) {
  // ...
}

var string = 'hello world';

substr(string, 2, 4);     // "llo "
substr(string, -3, 2);    // "rl"
substr(string, 8, 20);    // "rld"
substr(string, 0, -20);   // ""
substr(string, 0, 0);     // ""

The start argument is the starting index. If negative, treat it as strLength + start
where strLength is the length of the string. For example, if start is -3, treat it
as strLength - 3.

The length argument is the maximum length of the desired substring. If length
exceeds the number of characters available, just use the available characters.
You may use the square brackets ([]) to access characters by index (as shown below)
and the length property to find the string length. However, you may not use any
other properties or methods from JavaScript's built-in String class.

var a = 'hello';
a[0];             // "h"
a[4];             // "o"
*/

function substr(string, start, length) {
  var sub = '';

  if (start < 0) {
    start = string.length + start;
  }

  for (var i = 0; i < length; i++) {
    if (string[i + start] === undefined) {
      break;
    }

    sub += string[i + start];
  }

  return sub;
}

var string = 'hello world';

console.log(substr(string, 2, 4));
console.log(substr(string, -3, 2));
console.log(substr(string, 8, 20));
console.log(substr(string, 0, -20));
console.log(substr(string, 0, 0));