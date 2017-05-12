/*
Write a function that takes two Arrays as arguments, and returns an Array that contains the union of the values from the two. There should be no duplication of values in the returned Array, even if there are duplicates in the original Arrays. You may assume that the arguments will be Arrays only.

Example

union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]
*/

function union(arr1, arr2) {
  var newArr = [];

  addToArr(newArr, arr1);
  addToArr(newArr, arr2);

  return newArr;
}

function addToArr(newArr, arr) {
  var i;

  arr.forEach(function(value) {
    if (newArr.indexOf(value) === -1) {
      newArr.push(value);
    }
  });
}

console.log(union([1, 3, 5], [3, 6, 9]));