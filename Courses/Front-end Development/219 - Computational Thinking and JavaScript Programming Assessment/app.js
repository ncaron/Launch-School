/*
A garland word is one that starts and ends with the same N letters in the same order, for some N greater than 0, but less than the length of the word. I'll call the maximum N for which this works the garland word's degree. For instance, "onion" is a garland word of degree 2, because its first 2 letters "on" are the same as its last 2 letters.

Write a function that takes one argument of a word, and return its garland word degree.
*/

/*
- INPUT
 - String
  - The word the check if it's a garland word

- RETURN
  - Number
    - IF garland word, return degree
    - ELSE return 0

- ALGORITHM
  - Create variable called degree
  - LOOP from 1 to length of the word
    - Take substring of the first 'i' characters
    - Take substring of the last 'i' characters
    - Compare these 2 strings
    - If they are the same, 'i' will become the degree.
  - RETURN the degree.
*/

function garland(str) {
  var degree = 0;
  var i;

  for (i = 1; i < str.length; i += 1) {
    if (str.substr(0, i) === str.substr(-i)) {
      degree = i;
    }
  }

  return degree;
}

// TEST CASE
console.log(garland('onion'));      // 2
console.log(garland('onionn'));     // 0
console.log(garland(''));           // 0
console.log(garland('aabaa'));      // 2
console.log(garland('aaaa'));       // 3
console.log(garland(' '));          // 0
console.log(garland('1234hi1234')); // 4