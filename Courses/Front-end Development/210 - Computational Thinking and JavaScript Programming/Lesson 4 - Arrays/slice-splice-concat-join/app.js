function push(array, value) {
  array[array.length] = value;
  return array.length;
}

/*
Exercise 1

Write a function named slice that accepts three arguments: an Array, a start index, and an end index. The function
should return a new Array that contains values from the original Array starting with the value at the starting index,
and including all values up to but not including the end index. Do not modify the original Array.

You can use functions that were answers to previous exercises to complete this exercise, but do not use any built-in
Array methods.

slice([1, 2, 3, 4, 5], 0, 2);                         // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);     // [ 'b', 'c' ]
*/

function slice(array, start, end) {
  var newArray = [];

  for (var i = start; i < end; i++) {
    push(newArray, array[i]);
  }

  return newArray;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));


/* -----------------------------------------------------*/


/*
Exercise 2

Write a function named splice that accepts three arguments: an Array, a start index, and the number of values to remove.
The function should remove values from the original Array, starting with the first index and removing the specified
number of values. The method should return the removed values in a new Array.

You may use functions that were answers to previous exercises to complete this exercise, but do not use any built-in
Array methods.

var count = [1, 2, 3, 4, 5, 6, 7, 8];
splice(count, 2, 5);        // [ 3, 4, 5, 6, 7 ]
count;                      // [ 1, 2, 8]
*/

function splice(array, start, num) {
  var removed = [];

  for (var i = start; i < array.length; i++) {
    if (i < start + num) {
      push(removed, array[i]);
    }

    array[i] = array[i + num];
  }

  array.length = array.length - num;
  return removed;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));
console.log(count);


/* -----------------------------------------------------*/


/*
Exercise 3

Write a function named concat that accepts two Array arguments. The function should return a new Array that contains the
values from each of the original Arrays.

You may use functions that were answers to previous exercises to complete this exercise, but do not use any built-in
Array methods.

concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]
*/

function concat(arr1, arr2) {
  var newArr = [];

  for (var i = 0; i < arr1.length; i++) {
    push(newArr, arr1[i]);
  }

  for (var i = 0; i < arr2.length; i++) {
    push(newArr, arr2[i]);
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));


/* -----------------------------------------------------*/


/*
Write a function named join that accepts two arguments: an Array and a String. The function should coerce each value in
the Array to a String, and then join those values together using the second argument as a separator. You may assume that
a separator will always be passed.

You can call the String() function on any JavaScript value to get its String representation.

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'
*/

function join(array, separator) {
  var str = '';

  for (var i = 0; i < array.length; i++) {
    str += String(array[i]);

    if (i < array.length - 1) {
      str += separator;
    }
  }

  return str;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));
console.log(join([1, 2, 3], ' and '));