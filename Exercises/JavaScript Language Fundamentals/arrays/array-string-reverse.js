/*
For this exercise you will re-implement the Array.prototype.reverse() method. This implementation differs from the
built-in, in that it can take either a string or an array as an argument and consequently it returns a new string or
array.

function reverse(inputForReversal) {
  // ...
}

reverse('Hello');          // olleH
reverse('a');              // a
reverse([1, 2, 3, 4]);     // [4, 3, 2, 1]
reverse([]);               // []
*/

function reverseArray(arr) {
  var reversedArr = [];

  for (i = arr.length - 1; i >= 0; i -= 1) {
    reversedArr[arr.length - 1 - i] = arr[i];
  }

  return reversedArr;
}

function reverseString(str) {
  return reverseArray(str.split('')).join('');
}

function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return (reverseString(inputForReversal));
  }
}

console.log(reverse('Hello'));
console.log(reverse('a'));
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([]));