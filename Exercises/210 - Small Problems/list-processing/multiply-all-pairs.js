/*
Write a function that takes two Array arguments in which each Array contains a list of numbers, and returns a new Array that contains the product of every pair of numbers that between the elements of the two Arrays. Sort the results in increasing value.

You may assume that neither argument is an empty Array.

Examples:

multiplyAllPairs([2, 4], [4, 3, 1, 2]) // [2, 4, 4, 6, 8, 8, 12, 16]
*/

function multiplyAllPairs(arr1, arr2) {
  var newArr = [];
  var i;
  var j;

  for (i = 0; i < arr1.length; i += 1) {
    for (j = 0; j < arr2.length; j += 1) {
      newArr.push(arr1[i] * arr2[j]);
    }
  }

  return newArr.sort(function(a, b) {
    return a - b;
  });
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));