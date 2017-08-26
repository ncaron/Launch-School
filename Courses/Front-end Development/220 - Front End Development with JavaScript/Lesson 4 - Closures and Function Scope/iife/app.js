/*
Exercise 1

Will the code below execute?

function() {
  console.log("Sometimes, syntax isn't intuitive!")
}();
*/

// no/ because there's missing parentheses around the function and is not invoked, there will be an error.


/*
Exercise 2

Edit the code from problem one such that it executes without error.
*/

(function() {
  console.log("Sometimes, syntax isn't intuitive!")
})();


/*
Exercise 3

The code below throws an error:

var sum = 0;

sum += 10;
sum += 31;

var numbers = [1, 7, -3, 3];

function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
}

sum += sum(numbers); // ?

What kind of problem does this error highlight? Use an IIFE to address it, so that code runs without error.
*/

// sum is no longer a function because after hoisting, it goes to the top and then replaced with var sum.

var sum = 0;

sum += 10;
sum += 31;

var numbers = [1, 7, -3, 3];

sum += (function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);


/*
Exercise 4

Consider the output below:

countdown(7);
7
6
5
4
3
2
1
0
Done!

Implement a function countdown that uses an IIFE to generate the desired output.
*/

function countdown(count) {
  (function(n) {
    var i;

    for (i = n; i >= 0; i -= 1) {
      console.log(i);
    }

    console.log('Done!');
  })(count);
};

countdown(7);


/*
Exercise 5

Will the named function inside of this IIFE be accessible in the global scope?

(function foo() {
  console.log("Bar");
})();

foo() // ?
*/

// No.


/*
Exercise 6

For an extra challenge, refactor the solution to problem 4 using recursion, bearing in mind that a named function created in an IIFE can be referenced inside of the IIFE.
*/

function countdown(count) {
  (function recursiveSub(n) {
    console.log(n);

    if (n === 0) {
      console.log('Done!');
    } else {
      recursiveSub(n - 1);
    }
  })(count);
}

countdown(7);

function sayForecast(day, conditions) {
  console.log('The weather ' + day + ' will be ' + conditions + '.');
}
var test = function bar(day) {
  return function(weather) {
    sayForecast(day, weather);
  }
}

test('friday');