/*
Write a function that takes two Array arguments, in which each Array contains a list of numbers, and returns a new Array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

Examples:

multiplyList([3, 5, 7], [9, 10, 11]) // [27, 50, 77]
*/

function multiplyList(arr1, arr2) {
  var newArr = [];
  var i;

  for (i = 0; i < arr1.length; i += 1) {
    newArr.push(arr1[i] * arr2[i]);
  }

  return newArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));