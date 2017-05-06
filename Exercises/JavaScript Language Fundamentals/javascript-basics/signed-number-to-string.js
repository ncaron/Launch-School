var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  var strArr = [];
  var currentNum = 0;

  if (num === 0) {
    strArr.unshift(currentNum);
  }

  while (num > 0) {
    currentNum = num % 10;
    strArr.unshift(DIGITS[currentNum]);

    num -= currentNum;
    num /= 10;
  }

  return strArr.join('');
}

/*
In the previous exercise, you reimplemented a function that converts non-negative numbers to strings. In this exercise,
you're going to extend that function by adding the ability to represent negative numbers.

You may not use any of the standard conversion functions available in JavaScript, such as String(),
Number.prototype.toString() or doing ' ' + number. You may, however, use integerToString from the previous exercise.

Examples

signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"
*/

function signedIntegerToString(num) {

  if (num < 0) {
    return '-' + integerToString(-num);
  } else if (num > 0) {
    return '+' + integerToString(num);
  } else {
    return integerToString(num);
  }

  return str;
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));