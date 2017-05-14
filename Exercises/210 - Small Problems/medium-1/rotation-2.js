/*
Write a function that can rotate the last n digits of a number. For the rotation, rotate 1 digit to the left and put the first digit to the right.

For example:

rotateRightmostDigits(735291, 1) // 735291
rotateRightmostDigits(735291, 2) // 735219
rotateRightmostDigits(735291, 3) // 735912
rotateRightmostDigits(735291, 4) // 732915
rotateRightmostDigits(735291, 5) // 752913
rotateRightmostDigits(735291, 6) // 352917
*/

// Take the last n digit and put it at the end of the number.
// Convert number to a string.
// str.length - rot will get the index of what needs to be moved.
// Substring the numStr from 0 to the index, concat that with substring of index + 1 and digit at index.
// Convert string back to a number and return it.

function rotateRightmostDigits(num, rot) {
  var numStr = String(num);
  var index = numStr.length - rot;
  var rotated = numStr.substring(0, index).concat(numStr.substring(index + 1), numStr[index]);

  return Number(rotated);
}

console.log(rotateRightmostDigits(735291, 1));
console.log(rotateRightmostDigits(735291, 2));
console.log(rotateRightmostDigits(735291, 3));
console.log(rotateRightmostDigits(735291, 4));
console.log(rotateRightmostDigits(735291, 5));
console.log(rotateRightmostDigits(735291, 6));