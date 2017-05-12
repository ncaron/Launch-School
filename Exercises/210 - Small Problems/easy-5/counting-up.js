/*
Write a function that takes an integer argument, and returns an Array of all integers, in sequence, between 1 and the argument.

You may assume that the argument will always be a valid integer that is greater than 0.

Examples:

sequence(5) // [1, 2, 3, 4, 5]
sequence(3) // [1, 2, 3]
sequence(1) // [1]
*/

function sequence(num) {
  var sequenceArr = [];
  var i;

  for (i = 1; i <= num; i += 1) {
    sequenceArr.push(i);
  }

  return sequenceArr;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));