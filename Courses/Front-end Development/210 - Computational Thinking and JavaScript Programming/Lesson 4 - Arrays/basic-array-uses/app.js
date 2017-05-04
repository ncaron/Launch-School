/*
Exercise 1

In the exercises below, we ask you to write functions that work with Arrays. You may use Array's index access ([]), the
length property, and any Array Methods you need.

Write a function that returns the first element of an array passed in as an argument.

function firstElementOf(arr) {
  // ...
}

firstElementOf(['U', 'S', 'A']); // Returns "U"
*/

function firstElementOf(arr) {
  return arr[0];
}

console.log(firstElementOf(['U', 'S', 'A']));


/* -----------------------------------------------------*/


/*
Exercise 2

Write a function that returns the last element of an array passed in as an argument.

function lastElementOf(arr) {
  // ...
}

lastElementOf(['U', 'S', 'A']); // Returns "A"
*/

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

console.log(lastElementOf(['U', 'S', 'A']));


/* -----------------------------------------------------*/


/*
Exercise 3

Write a function that accepts two arguments, an array and an integer index position, and returns the element at the
given index. What happens if the index is greater than the length of the array? What happens if it is a negative integer?

function nthElementOf(arr, index) {
  // ...
}

var digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3); // Returns 16
nthElementOf(digits, 8); // What does this return?
nthElementOf(digits, -1); // What does this return?
*/

// Negative index or index greater than the length of the array - 1, will return undefined.

function nthElementOf(arr, index) {
  return arr[index];
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(nthElementOf(digits, 3));
console.log(nthElementOf(digits, 8));
console.log(nthElementOf(digits, -1));


/* -----------------------------------------------------*/


/*
Exercise 4

Can we insert data into an array at a negative index? If so, why is this possible?
*/

// Yes because arrays are objects.


/* -----------------------------------------------------*/


/*
Exercise 5

Write a function that accepts an array as the first argument and an integer element, count, as the second. It should
return a new array that contains the first count elements of the array.

function firstNOf(arr, count) {
  // ...
}

var digits = [4, 8, 15, 16, 23, 42];
firstNOf(digits, 3); // Returns [4, 8, 15]
*/

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));


/* -----------------------------------------------------*/


/*
Exercise 6

Write a function like the previous one, except this time return the last count elements as a new array.

function lastNOf(arr, count) {
  // ...
}

var digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3); // Returns [16, 23, 42]
*/

function lastNOf(arr, count) {
  return arr.slice(arr.length - count);
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));


/* -----------------------------------------------------*/


/*
Exercise 7

Using the function from the previous exercise, What happens if you pass a count greater than the length of the array?
How can you fix the function so it returns a new instance of the entire array when count is greater than the array length?
*/

// It will pass a negative value to slice which will start at the end of the array.
// To fix this, we could add an if statement to check if count is greater and pass in zero instead.


/* -----------------------------------------------------*/


/*
Exercise 8

Write a function that accepts two arrays as arguments and returns an array with the first element from the first array
and the last element from the second array.

function endsOf(beginningArr, endingArr) {
  // ...
}

endsOf([4, 8, 15], [16, 23, 42]); // Returns [4, 42]
*/

function endsOf(beginningArr, endingArr) {
  var newArr = [];

  newArr.push(beginningArr[0]);
  newArr.push(endingArr[endingArr.length - 1]);

  return newArr;
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));