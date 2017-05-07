/*
Write a function named myOwnEvery that's similar to the Array.prototype.every method. It should take an array and a
function as arguments and return true if every element passed to the function evaluates as truthy.

function myOwnEvery(array, func) {
}

var isAString = function(value) {
  return typeof value === 'string';
};

myOwnEvery(['a', 'a234', '1abc'], isAString);       // true
*/

function myOwnEvery(array, func) {
  var i;

  for (i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

var isAString = function(value) {
  return typeof value === 'string';
};

console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));


/*
Let's write a program that checks whether all elements of an array are Numbers.

function areAllNumbers(array) {
  // ...
}

var isANumber = function(value) {
  return typeof value === 'number';
};

areAllNumbers([1, 5, 6, 7, '1']);             // false
areAllNumbers([1, 5, 6, 7, 1]);               // true
*/

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

var isANumber = function(value) {
  return typeof value === 'number';
};

console.log(areAllNumbers([1, 5, 6, 7, '1']));
console.log(areAllNumbers([1, 5, 6, 7, 1]));