/*
Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the
result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that
the strings are of different lengths.

Examples:

shortLongShort('abc', 'defgh');   // "abcdefghabc"
shortLongShort('abcde', 'fgh');   // "fghabcdefgh"
shortLongShort('', 'xyz');        // "xyz"
*/

function shortLongShort(string1, string2) {
  var short = string1.length < string2.length ? string1 : string2;
  var long = string1.length >= string2.length ? string1 : string2;

  return short + long + short;
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));