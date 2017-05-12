/*
Write a function that takes an Array as an argument, and returns an array that contains 2 elements, each of which is an Array. Put the first half of the original Array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half Array.

Examples:

halvsies([1, 2, 3, 4])    // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]) // [[1, 5, 2], [4, 3]]
halvsies([5])             // [[5], []]
halvsies([])              // [[], []]
*/

function halvsies(arr) {
  var half = Math.ceil(arr.length / 2);
  var firstHalf = arr.slice(0, half);
  var secondHalf = arr.slice(half);

  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));