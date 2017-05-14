/*
Write a function that takes a string and then returns an object that contains 3 properties: one represents the percentage of characters in the string that are lowercase letters, one the percentage of characters that are uppercase letters, and one the percentage of characters that are neither.

You may assume that the string will always contain at least one character.

Examples

letterPercentages('abCdef 123') // { lowercase: 50.00, uppercase: 10.00, neither: 40.00 }
letterPercentages('AbCd +Ef')   // { lowercase: 37.50, uppercase: 37.50, neither: 25.00 }
letterPercentages('123')        // { lowercase: 0.00, uppercase: 0.00, neither: 100.00 }
*/

// Input is a string
// Output an object with percentage ratios of lowercase, uppercase and neither.
// Use regex to match lowercases, uppercases and neither.
// Take the length of matched arrays and divide by total number of characters multiplied by 100.
// Assign that value to respective object properties.
// Output always has 2 decimal digits (toFixed(2))

function letterPercentages(str) {
  var count = str.length;
  var lowercases = str.match(/[a-z]/g) || [];
  var uppercases = str.match(/[A-Z]/g) || [];
  var neithers = str.match(/[^a-z]/ig) || [];

  return {
    lowercase: (lowercases.length / count * 100).toFixed(2),
    uppercase: (uppercases.length / count * 100).toFixed(2),
    neither: (neithers.length / count * 100).toFixed(2),
  }
}

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));