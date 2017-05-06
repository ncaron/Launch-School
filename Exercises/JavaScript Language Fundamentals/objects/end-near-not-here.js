/*
The penultimate function returns the next to the last word in the String passed to it. The function assumes that "words"
are any sequence of non-blank characters. It also assumes that the input String will always contain at least two words.
Currently, the solution provided does not match expected result. Run the program, check the current result, identify the
problem, explain what the problem is, and provide a working solution.

Examples:

penultimate('last word')               // 'last'
penultimate('Launch School is great!') // 'is'

function penultimate(string) {
  return string.split(' ')[-2];
}
*/

console.log(penultimate('last word'));
console.log(penultimate('Launch School is great!'));

function penultimate(string) {
  return string.split(' ')[-2];
}

// Split will split the strings in an array of words seperated by a space.
// The problem is accessing -2 on the array. It's not a property of the object and is undefined.
// A solution would be to access the length of the split return - 1.

console.log(penultimate2('last word'));
console.log(penultimate2('Launch School is great!'));

function penultimate2(string) {
  var wordArr = string.split(' ');

  return wordArr[wordArr.length - 2];
}