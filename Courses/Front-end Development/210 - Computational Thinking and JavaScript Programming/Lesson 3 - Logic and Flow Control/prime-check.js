/*
Write a function that takes a number argument, and returns true if the
number is prime, false if it is not.

You may assume that the input is always a non-negative integer.

Example

isPrime(1);  // false
isPrime(2);  // true
isPrime(3);  // true
isPrime(43); // true
isPrime(55); // false
isPrime(0);  // false
*/

function isPrime(num) {
  if (num <= 1 || (num > 2 && num % 2 == 0)) {
    return false;
  }

  for (var i = 3; i < num; i+= 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(43));
console.log(isPrime(55));
console.log(isPrime(0));