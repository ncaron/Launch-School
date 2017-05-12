/*
Write a function that takes one argument, a string, and returns the same string with the words in reverse order.

Examples:

reverseSentence('');                     // ''
reverseSentence('Hello World');          // 'World Hello'
reverseSentence('Reverse these words');  // 'words these Reverse'
*/

function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));
console.log(reverseSentence('Hello World'));
console.log(reverseSentence('Reverse these words'));