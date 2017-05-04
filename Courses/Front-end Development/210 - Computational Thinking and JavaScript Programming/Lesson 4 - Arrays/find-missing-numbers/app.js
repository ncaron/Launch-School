/*
Write a function that takes a sorted array of integers as an argument, and returns an array that includes all the
missing integers (in order) between the first and last elements of the argument.

Examples:

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []
*/

function missing(arr) {
  var missing = [];

  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = arr[i] + 1; j < arr[i + 1]; j++) {
      missing.push(j);
    }
  }

  return missing;
}

console.log(missing([-3, -2, 1, 5]));
console.log(missing([1, 2, 3, 4]));
console.log(missing([1, 5]));
console.log(missing([6]));