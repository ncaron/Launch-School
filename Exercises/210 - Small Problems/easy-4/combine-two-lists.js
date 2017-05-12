/*
Write a function that combines two Arrays passed as arguments, and returns a new Array that contains all elements from both Array arguments, with the elements taken in alternation.

You may assume that both input Arrays are non-empty, and that they have the same number of elements.

Example:

interleave([1, 2, 3], ['a', 'b', 'c']) // [1, 'a', 2, 'b', 3, 'c']
*/

function interleave(arr1, arr2) {
  var newArr = [];
  var i;

  for (i = 0; i < arr1.length; i += 1) {
    newArr.push(arr1[i], arr2[i]);
  }

  return newArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));