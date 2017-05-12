/*
Write a function that takes an array of numbers, and returns an array with the same number of elements with each elements value being running total from the original array.

Examples:

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
*/

function runningTotal(nums) {
  return nums.map(function(value, index) {
    return nums.slice(0, index + 1).reduce(function(total, values) {
      return total + values;
    });
  });
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));