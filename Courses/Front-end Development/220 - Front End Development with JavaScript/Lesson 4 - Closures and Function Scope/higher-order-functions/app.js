/*
Exercise 1

What are the two characteristics that define higher-order functions?
*/

// They can take a function and/or return a function


/*
Exercise 2

Consider the code below:

var numbers = [1, 2, 3, 4];
function checkEven(number) {
  return number % 2 === 0;
}

numbers.filter(checkEven); // (2) [2, 4]

Of the two functions invoked (checkEven and filter), which is a higher-order function, and why?
*/

// filter, because it takes in a function (checkEven) as argument.


/*
Exercise 3

Implement makeCheckEven below, such that the last line of the code returns an array [2, 4].

var numbers = [1, 2, 3, 4];
function makeCheckEven() {
  // ... implement this function
}

var checkEven = makeCheckEven();

numbers.filter(checkEven); // (2) [2, 4]
*/

function makeCheckEven() {
  return function(n) {
    return n % 2 === 0;
  }
}


/*
Exercise 4

Implement execute below, such that the return values for the two function invocations match the commented values.

function execute(func, operand) {
  // implement this function...
}

execute(function(number) {
  return number * 2;
}, 10); // 20

execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy'); // HEY THERE BUDDY
*/

function execute(func, operand) {
  return func(operand);
}


/*
Exercise 5

Implement makeListTransformer below such that timesTwo's return value matches the commented return value.

function makeListTransformer(func) {
  // implement this function
}

var timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]
*/

function makeListTransformer(func) {
  return function(collection) {
    return collection.map(func);
  }
}