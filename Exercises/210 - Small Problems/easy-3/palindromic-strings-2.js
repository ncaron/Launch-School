/*
Write another function that returns true if the string passed as an argument is a palindrome, false otherwise. This
time, however, your function should be case-insensitive, and it should ignore all non-alphanumeric characters. If you
wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

Examples:

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome('Madam, I\'m Adam');    // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
*/

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isRealPalindrome(str) {
  return isPalindrome(str.toLowerCase().replace(/[^a-z0-9]/g, ''));
}

console.log(isRealPalindrome('madam'));
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome('Madam, I\'m Adam'));
console.log(isRealPalindrome('356653'));
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('123ab321'));