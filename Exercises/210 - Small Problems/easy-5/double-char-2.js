/*
Write a function that takes a string, and returns a new string in which it doubles every consonant character. It doesn't double vowels (a,e,i,o,u), digits, punctuation, and whitespace.

Examples:

doubleConsonants('String')       // "SSttrrinngg"
doubleConsonants('Hello-World!') // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th')     // "JJullyy 4tthh"
doubleConsonants('')             // ""
*/

function doubleConsonants(str) {
  var consonantDouble = [];
  var i;

  for (i = 0; i < str.length; i += 1) {
    consonantDouble.push(str[i]);

    if ('bcdfghjklmnpqrstvwxyz'.indexOf(str[i].toLowerCase()) > -1) {
      consonantDouble.push(str[i]);
    }
  }

  return consonantDouble.join('');
}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));