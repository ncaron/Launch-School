/*
Write a function named arraysEqual that takes two Arrays as arguments. The function returns true if the Arrays contain
the same values, false if they do not.

Test the function with Arrays that contain Numbers, Strings, and Boolean values. Don't worry about handling Arrays that
contain other Arrays or Objects.

arraysEqual([1], [1]);                               // true
arraysEqual([1], [2]);                               // false
arraysEqual([1, 2], [1, 2, 3]);                      // false
arraysEqual([1, 'hi', true], [1, 'hi', true]);       // true
arraysEqual([1, 'hi', true], [1, 'hi', false]);      // false
arraysEqual([1, 'hi', true], [1, 'hello', true]);    // false
arraysEqual([1, 'hi', true], [2, 'hi', true]);       // false
*/

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(arraysEqual([1], [1]));
console.log(arraysEqual([1], [2]));
console.log(arraysEqual([1, 2], [1, 2, 3]));
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));