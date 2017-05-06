/*
The previous exercise mimics the parseInt function to a lesser extent. In this exercise, you're going to extend that
function to work with signed numbers.

Write a function that takes a string of digits, and returns the appropriate number as an integer. The string may have a
leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your
function should return a negative number. If there is no sign return a positive number.

You may assume the string will always contain a valid number.

Examples

stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100
*/

var DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
}

function createNumArr(str) {
  var numArr = [];
  var i;

  for (i = 0; i < str.length; i += 1) {
    if (str[i] === '+' || str[i] === '-') {
      numArr.push(str[i]);
    } else {
      numArr.push(DIGITS[str[i]]);
    }
  }

  return numArr;
}

function stringToSignedInteger(str) {
  var numArr = createNumArr(str);
  var num = 0;
  var i;

  for (i = 0; i < numArr.length; i += 1) {
    if (numArr[i] === '+' || numArr[i] === '-') {
      continue;
    }

    num *= 10;
    num += numArr[i];
  }

  if (numArr[0] === '-') {
    num *= -1;
  }

  return num;
}

console.log(stringToSignedInteger('4321'));
console.log(stringToSignedInteger('-570'));
console.log(stringToSignedInteger('+100'));