/*
Exercise 1

Write a function that creates and returns a new array from its array argument. The new array should contain all values
from the argument array whose positions have an odd index.

function oddElementsOf(arr) {
  // ...
}

var digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits); // Returns [8, 16, 42]
*/

function oddElementsOf(arr) {
  var newArr = [];

  for (var i = 1; i < arr.length; i += 2) {
      newArr.push(arr[i]);
  }

  return newArr;
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));


/* -----------------------------------------------------*/


/*
Exercise 2

Write a function that takes two arrays and returns a new array whose even positions come from the first array, and whose
odd positions come from the second array. Assume that both arrays have equal length.

function combinedArray(even, odd) {
  // ...
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

combinedArray(digits, letters); // Returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]
*/

function combinedArray(even, odd) {
  var newArr = [];

  for (var i = 0; i < even.length; i++) {
    newArr.push(even[i]);
    newArr.push(odd[i]);
  }

  return newArr;
}

digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(combinedArray(digits, letters));


/* -----------------------------------------------------*/


/*
Exercise 3

Write a function that takes an array argument and returns a new array that contains all the argument's elements in their
original order followed by all the argument's elements in reverse order.
*/

function forwardReverse(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
}

digits = [1, 2, 3, 4, 5];
console.log(forwardReverse(digits));


/* -----------------------------------------------------*/


/*
Exercise 4

Write a function that takes an array and a joiner string. It should return a string formed by concatenating all the
elements with the joiner between each pair of concatenated values. For example, if the array is ['a', 'b', 'c'] and the
joiner string is a '+', the function should return 'a+b+c'. If the call omits the joiner string, use an empty string
instead. You may not use the built-in Array.prototype.join method.

function joinArray(arr, joiner) {
  // ...
}

joinArray(['a', 'b', 'c'], '+'); // Returns "a+b+c"
joinArray([1, 4, 1, 5, 9, 2, 7]); // Returns "1415927"
*/

function joinArray(arr, joiner) {
  var str = '';

  if (joiner === undefined) {
    joiner = '';
  }

  for (var i = 0; i < arr.length; i++) {
    str += String(arr[i]);

    if (i < arr.length - 1) {
      str += joiner;
    }
  }

  return str;
}

console.log(joinArray(['a', 'b', 'c'], '+'));
console.log(joinArray([1, 4, 1, 5, 9, 2, 7]));


/* -----------------------------------------------------*/


/*
Exercise 5

Use the array sort method to create a function that takes an array of numbers and returns a new array of the numbers
sorted in descending order. Do not alter the original array.

function sortDescending(arr) {
  // ...
}

var array = [23, 4, 16, 42, 8, 15]
var result = sortDescending(array); // Returns [42, 23, 16, 15, 8, 4]
console.log(result);   // Logs [42, 23, 16, 15, 8, 4]
console.log(array);    // Logs [23, 4, 16, 42, 8, 15])
*/

function sortDescending(arr) {
  return arr.slice().sort(function(a, b) {
    return b - a;
  });
}

var array = [23, 4, 16, 42, 8, 15]
var result = sortDescending(array);
console.log(result);
console.log(array);


/* -----------------------------------------------------*/


/*
Exercise 6

Write a function that takes an array of arrays as an argument, and returns a new array that contains the sums of each of
the sub-arrays.

function matrixSums(arr) {
  // ...
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]); // Returns [15, 60, 12]
*/

function matrixSums(arr) {
  var sums = [];
  var innerSum;

  for (var i = 0; i < arr.length; i++) {
    innerSum = 0;

    for (var j = 0; j < arr[i].length; j++) {
      innerSum += arr[i][j];
    }

    sums.push(innerSum)
  }

  return sums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));


/* -----------------------------------------------------*/


/*
Exercise 7

Write a function that takes an array and returns a new array with duplicate elements removed.

function uniqueElements(arr) {
  // ...
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]); // Returns [1, 2, 4, 3, 5]
*/

function uniqueElements(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));