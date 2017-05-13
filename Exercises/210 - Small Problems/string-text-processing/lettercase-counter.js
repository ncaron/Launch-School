/*
Write a function that takes a string, and then returns an object that contains 3 properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and finally one representing the number of characters that are neither.

Examples

letterCaseCount('abCdef 123') // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef')   // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123')        // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('')           // { lowercase: 0, uppercase: 0, neither: 0 }
*/

function letterCaseCount(str) {
  var letterCase = {};
  var lowercases = str.match(/[a-z]/g) || [];
  var uppercases = str.match(/[A-Z]/g) || [];
  var neithers = str.match(/[^a-z]/ig) || [];

  letterCase.lowercase = lowercases.length;
  letterCase.uppercase = uppercases.length;
  letterCase.neither = neithers.length;

  return letterCase;
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));