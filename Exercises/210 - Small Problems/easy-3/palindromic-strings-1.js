/*
Write a function that returns true if the string passed as an argument is a palindrome, false otherwise. A palindrome
reads the same forwards and backwards. For this problem the case matters and all characters matter.

Examples:

isPalindrome('madam');                    // true
isPalindrome('Madam');                    // false (case matters)
isPalindrome('madam i\'m adam');          // false (all characters matter)
isPalindrome('356653');                   // true
*/

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('madam i\'m adam'));
console.log(isPalindrome('356653'));