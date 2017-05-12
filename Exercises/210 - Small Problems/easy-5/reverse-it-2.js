/*
Write a function that takes one argument, a string containing one or more words, and returns the given string with all five or more letter words reversed. Each string will consist of only letters and spaces. Include spaces only when more than one word is present.

Examples:

reverseWords('Professional');          // lanoisseforP
reverseWords('Walk around the block'); // Walk dnuora the kcolb
reverseWords('Launch School');         // hcnuaL loohcS
*/

function reverseWords(str) {
  return str.split(' ').map(function(word) {
    return word.length >= 5 ? word.split('').reverse().join('') : word
  }).join(' ');
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));