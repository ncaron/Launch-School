/*
Our initial fibonacci solution that used recursion wasn't that efficient. It may start to slow down already with an nth argument of 35. One way to improve the performance of the recursive fibonacci function is to use memoization.

Memoization is an approach to saving a computed answer for possible reuse at a later time rather than having to recompute it again. In the case of the recursive fibonacci, it will save calls to fibonacci(nth - 2). This is because the values needed for this will already be computed when the recursive calls were done for fibonacci(nth - 1).

For this exercise, your objective is to refactor the recursive fibonacci to use memoization.
*/

var memo = {};

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }

  if (memo[n]) {
    return memo[n];
  } else {
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
  }
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));