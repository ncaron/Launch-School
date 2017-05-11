/*
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first 2 numbers are 1 by
definition, and each subsequent number is the sum of the two previous numbers. This series appears throughout the
natural world.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example,
the 100th Fibonacci number is 354,224,848,179,261,915,075 -- that's enormous, especially considering that it takes 6
iterations just to find the first 2 digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits
specified as an argument. (The first Fibonacci number has index 1.)

Examples:

findFibonacciIndexByLength(2);     // 7
findFibonacciIndexByLength(10);    // 45
findFibonacciIndexByLength(16);    // 74
*/

function findFibonacciIndexByLength(len) {
  var currentLen;
  var fibonacci = [1, 1];

  while (true) {
    currentIndex = fibonacci.length;
    currentNum = fibonacci[currentIndex - 1] + fibonacci[currentIndex  - 2]
    fibonacci.push(currentNum);
    currentLen = String(currentNum).length;

    if (currentLen >= len) {
      return currentIndex + 1;
    }
  }
}

console.log(findFibonacciIndexByLength(2));
console.log(findFibonacciIndexByLength(10));
console.log(findFibonacciIndexByLength(16));