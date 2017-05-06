/*
Implement a function that takes a String as an argument and returns an object that contains a count of the repeated
characters.

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }

Note that repeatedCharacters does a bit more than simply count the frequency of each character: it determines the
counts, but only returns counts for characters that have a count of 2 or more. It also ignores the case.
*/

function repeatedCharacters(str) {
  var repeated = {};
  var lower = str.toLowerCase();

  for (var i = 1; i < str.length; i++) {
    for (var j = 0; j < i; j++) {
      if (lower[i] === lower[j]) {
        if (Object.keys(lower).indexOf() === -1) {
          repeated[lower[i]] = 2;
        } else {
          repeated[lower[i]] += 1;
        }

        break;
      }
    }
  }
  
  return repeated;
}

console.log(repeatedCharacters('Programming'));
console.log(repeatedCharacters('Combination'));
console.log(repeatedCharacters('Pet'));
console.log(repeatedCharacters('Paper'));
console.log(repeatedCharacters('Baseless'));