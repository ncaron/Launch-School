/*
Write a function that takes a string, and returns a new string in which it doubles every character.

Examples:

repeater('Hello')     // "HHeelllloo"
repeater("Good job!") // "GGoooodd  jjoobb!!"
repeater('')          // ''
*/

function repeater(str) {
  var repeated = [];
  var i;

  for (i = 0; i < str.length; i += 1) {
    repeated.push(str[i], str[i])
  }

  return repeated.join('');
}

console.log(repeater('Hello'));
console.log(repeater("Good job!"));
console.log(repeater(''));