/*
Write a Function named anagram that takes two arguments, a word and an Array of words. Your function should return an
Array that contains all the words from the Array argument that are anagrams of the word argument. For example, given the
word "listen" and an Array of candidate words like "enlist", "google", "inlets", and "banana", the program should return
an Array that contains "enlist" and "inlets".

Examples

function anagram(word, list) {
  // ...
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']); // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);  // [ "enlist", "inlets" ]
*/

function areAnagrams(candidate, word) {
  return candidate.split('').sort().join('') === word.split('').sort().join('');
}

function anagram(word, list) {
  return list.filter(function(candidate) {
    return areAnagrams(candidate, word);
  });
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));