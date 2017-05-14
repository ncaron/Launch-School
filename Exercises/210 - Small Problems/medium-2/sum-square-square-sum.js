/*
Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

Examples:

sumSquareDifference(3)    // 22
// -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10)   // 2640
sumSquareDifference(1)    // 0
sumSquareDifference(100)  // 25164150
*/

// loop from 1 to num inclusively.
// at each iteration
//  - add i to the sum
//  - add Math.pow(i, 2) to the square
// return Math.pow(sum, 2) - square

function sumSquareDifference(num) {
  var sum = 0;
  var square = 0;
  var i;

  for (i = 1; i <= num; i += 1) {
    sum += i;
    square += Math.pow(i, 2);
  }

  return Math.pow(sum, 2) - square;
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));