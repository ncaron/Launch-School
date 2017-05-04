/*
Exercise 1

Write a function named push that accepts two arguments: an Array and any other value. The function should append the
second argument to the end of the Array and return the new length of the Array.

var count = [1, 2, 3];
push(count, 4);   // 4
count;            // [ 1, 2, 3, 4 ]
*/

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

var count = [1, 2, 3];
console.log(push(count, 4));
console.log(count);


/* -----------------------------------------------------*/


/*
Exercise 2

Write a function named pop that accepts one argument: an Array. The function should remove the last element from the
array and return it.

var count = [1, 2, 3];
pop(count);           // 3
count;                // [ 1, 2 ]
*/

function pop(array) {
  var newLen = array.length - 1;
  var value = array[newLen];
  
  array.length = newLen;
  return value;
}

count = [1, 2, 3];
console.log(pop(count));
console.log(count);


/* -----------------------------------------------------*/


/*
Exercise 3

Write a function named unshift that accepts two arguments: an Array and a value. The function should insert the value at
the beginning of the Array and return the new length of the array. You will need a for loop for this exercise.

var count = [1, 2, 3];
unshift(count, 0);        // 4
count;                    // [ 0, 1, 2, 3 ]
*/

function unshift(array, value) {
  for (var i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = value;
  return array.length;
}

count = [1, 2, 3];
console.log(unshift(count, 0));
console.log(count);


/* -----------------------------------------------------*/


/*
Exercise 4

Write a function named shift that accepts one argument: an Array. The function should remove the first value from the
beginning of the Array and return it.

var count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]
*/

function shift(array) {
  var newLen = array.length - 1;
  var value = array[0];

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array.length = newLen;
  return value;
}

count = [1, 2, 3];
console.log(shift(count));
console.log(count);