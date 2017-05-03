/*
Write a function logMultiples that takes one argument number. It should
log all multiples of the argument between 0 and 100 (inclusive) that are
also odd numbers. Log the values in descending order.

You may assume that number is an integer between 0 and 100.

Example

logMultiples(17);
// output (5x, 3x and 1x)
85
51
17

logMultiples(21);
// output (3x and 1x)
63
21
*/

function logMultiples(num) {
  for (var i = 99; i > 0; i -= 2) {
    if (i % num == 0) {
      console.log(i);
    }
  }
}

logMultiples(17);
logMultiples(21);