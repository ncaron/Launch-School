/*
In the previous exercise, we developed a recursive solution to calculating the nth Fibonacci number. In a language that is not optimized for recursion, some (not all) recursive functions can be extremely slow and require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, you may have notice that getting the 50th fibonacci number already takes some time.

Fortunately, every recursive function can be rewritten as a non-recursive (procedural) function.

Rewrite your recursive fibonacci function so that it computes its results without recursion.

Examples:

fibonacci(20)   // 6765
fibonacci(50)   // 12586269025
fibonacci(100)  // 354224848179261915075
*/

function fibonacci(n) {
  var first = 1;
  var second = 1;
  var temp;
  var i;

  for (i = 2; i < n; i += 1) {
    temp = second;
    second = first + second;
    first = temp;
  }

  return second;
}

console.log(fibonacci(20)); 
console.log(fibonacci(50)); 
console.log(fibonacci(100));