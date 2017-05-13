/*
Write a function that takes an array of strings, and returns an array of the same string values without the vowels (a, e, i, o, u).

Example:

removeVowels(['abcdefghijklmnopqrstuvwxyz']);             // ['bcdfghjklmnpqrstvwxyz']
removeVowels(['green', 'YELLOW', 'black', 'white']);      // ['grn', 'YLLW', 'blck', 'wht']
removeVowels(['ABC', 'AEIOU', 'XYZ']);                    // ['BC', '', 'XYZ']
*/

function removeVowels(str) {
  return str.map(function(innerStr) {
    return innerStr.replace(/[aieou]/ig, '');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));