/*
Write a function that takes two sorted Arrays as arguments, and returns a new Array that contains all elements from both arguments in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

Examples:

merge([1, 5, 9], [2, 6, 8]) // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2])    // [1, 1, 2, 2, 3]
merge([], [1, 4, 5])        // [1, 4, 5]
merge([1, 4, 5], [])        // [1, 4, 5]
*/

function merge(arr1, arr2) {
  var copy1 = arr1.slice();
  var copy2 = arr2.slice();
  var merged = [];

  while (copy1.length > 0 && copy2.length > 0) {
    merged.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return merged.concat(copy1.length === 0 ? copy2 : copy1);
}

console.log(merge([1, 5, 9], [2, 6, 8]));
console.log(merge([1, 1, 3], [2, 2]));
console.log(merge([], [1, 4, 5]));
console.log(merge([1, 4, 5], []));