/*
If you take a number like 735291, and rotate it to the left, you get 352917. If you now keep the first digit fixed in place, and rotate the remaining digits, you get 329175. Keep the first 2 digits fixed in place and rotate again to get 321759. Keep the first 3 digits fixed in place and rotate again to get 321597. Finally, keep the first 4 digits fixed in place and rotate the final 2 digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as argument, and returns the maximum rotation of that argument. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

Example:

maxRotation(735291)        // 321579
maxRotation(3)             // 3
maxRotation(35)            // 53
maxRotation(105)           // 15 # the leading zero gets dropped
maxRotation(8703529146)    // 7321609845
*/

// Convert num to a string.
// loop down the string.
// call rotateRightmostDigits(num, i) on every iteration, assigning it to num.
// Return num at the end of the loop.

function rotateRightmostDigits(num, rot) {
  var numStr = String(num);
  var index = numStr.length - rot;
  var rotated = numStr.substring(0, index).concat(numStr.substring(index + 1), numStr[index]);

  return Number(rotated);
}

function maxRotation(num) {
  var numStr = String(num);
  var i;

  for (i = numStr.length; i > 1; i -= 1) {
    num = rotateRightmostDigits(num, i);
  }

  return num;
}

console.log(maxRotation(735291));
console.log(maxRotation(3));
console.log(maxRotation(35));
console.log(maxRotation(105));
console.log(maxRotation(8703529146));