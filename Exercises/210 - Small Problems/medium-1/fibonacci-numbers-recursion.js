/*
The Fibonacci series is a sequence of numbers starting with 1 and 1 where each number is the sum of the two previous numbers. So, the 3rd Fibonacci number is 1 + 1 = 2, the 4th is 1 + 2 = 3, the 5th is 2 + 3 = 5, and so on. In mathematical terms:

F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

This simple sequence can easily be computed using a "recursive" function. A recursive function is one in which the function calls itself. For example:

function sum(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sum(n - 1);
  }
}

is a recursive function to compute the sum of all integers between 1 and n. A good recursive function has 3 main qualities:

It calls itself at least once.

It has an ending condition (if (n == 1) above).

The results of each recursion are used in each step (n + sum(n - 1) uses sum(n - 1).

Write a recursive function that computes the nth Fibonacci number, where nth is an argument to the function.

NOTE: This exercise verges on the Advanced level of exercises, so don't be discouraged if you can't do it on your own; recursion is tricky, and even experienced developers can have difficulty dealing with it.

Examples:

fibonacci(1)   // 1
fibonacci(2)   // 1
fibonacci(3)   // 2
fibonacci(4)   // 3
fibonacci(5)   // 5
fibonacci(12)  // 144
fibonacci(20)  // 6765
*/

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));