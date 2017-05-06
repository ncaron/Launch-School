/*
In the arrays lesson, we implemented a version of comparing arrays that had an implicit assumption that elements are in
the same indices when compared. In this exercise, the objective is to implement the same function but this time it
compares the values of the arrays from any index (i.e. [1, 2, 3] === [3, 2 ,1] will return true).

Examples:

function areArraysEqual(array1, array2) {
  // ...
}

areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']);      // true
areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false
*/

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  var sorted1 = array1.slice().sort();
  var sorted2 = array2.slice().sort();
  var i;

  for (i = 0; i < sorted1.length; i += 1) {
    if (sorted1[i] !== sorted2[i]) {
      return false;
    }
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));