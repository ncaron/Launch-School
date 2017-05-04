/*
Exercise 1
Write a function indexOf that accepts two arguments: an Array and a value. The function should return the index of the
first element that contains the value, or -1 if the value is not present.

indexOf([1, 2, 3, 3], 3);         // 2
indexOf([1, 2, 3], 4);            // -1
*/

function indexOf(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));
console.log(indexOf([1, 2, 3], 4));


/* -----------------------------------------------------*/


/*
Exercise 2

Write a function lastIndexOf that accepts two arguments: an Array and a value. The function should return the index of
the last element that contains the value, or -1 if the value is not present.

lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);        // -1
*/

function lastIndexOf(array, value) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));
console.log(lastIndexOf([1, 2, 3], 4));