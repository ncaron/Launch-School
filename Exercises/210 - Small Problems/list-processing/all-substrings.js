/*
Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

You may (and should) use the substringsAtStart function you wrote in the previous exercise:

Examples:

substrings('abcde');
// result
[ 'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e' ]
  */

function substringsAtStart(str) {
  var subs = [];
  var i;

  for (i = 0; i < str.length; i += 1) {
    subs.push(str.substr(0, i + 1));
  }

  return subs;
}

function substrings(str) {
  var allSubs = [];
  var i;

  for (i = 0; i < str.length; i += 1) {
    allSubs.push(substringsAtStart(str.substring(i)));
  }

  return allSubs.reduce(function(result, arr) {
    return result.concat(arr);
  });
}

console.log(substrings('abcde'));