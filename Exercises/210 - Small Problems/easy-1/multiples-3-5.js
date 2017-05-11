/*
Write a function that computes the sum of all numbers from 1 and some other number that are a multiple of 3 or 5. For
instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

Examples

multisum(3);      // 3
multisum(5);      // 8
multisum(10);     // 33
multisum(1000);   // 234168
*/

function multiples(num) {
  if (num % 3 === 0 || num % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

function multisum(num) {
  var total = 0;
  var i;

  for (i = 1; i <= num; i += 1) {
    if (multiples(i)) {
      total += i;
    }
  }

  return total;
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));