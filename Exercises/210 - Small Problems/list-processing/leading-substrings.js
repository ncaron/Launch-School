/*
Write a function that returns a list of all substrings of a string that start at the beginning of the original string. It returns the substrings arranged from shortest to longest.

Examples:

substringsAtStart('abc')   // ['a', 'ab', 'abc']
substringsAtStart('a')     // ['a']
substringsAtStart('xyzzy') // ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']
*/

function substringsAtStart(str) {
  var subs = [];
  var i;

  for (i = 0; i < str.length; i += 1) {
    subs.push(str.substr(0, i + 1));
  }

  return subs;
}

console.log(substringsAtStart('abc'));
console.log(substringsAtStart('a'));
console.log(substringsAtStart('xyzzy'));