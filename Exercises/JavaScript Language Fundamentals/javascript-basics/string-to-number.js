/*
For this exercise we're going to learn more about type conversion by implementing our own parseInt() function that
converts a string of numeric characters (including an optional plus or minus sign) to a number.

The function takes a string of digits as an argument and returns the appropriate number. Do not use any of the built-in
functions for converting a string to a number type.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters
will be numeric.

Examples:

stringToInteger('4321');          // 4321
stringToInteger('570');           // 570
*/

var DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
}

function createNumArr(str) {
  var numArr = [];
  var i;

  for (i = 0; i < str.length; i += 1) {
    numArr.push(DIGITS[str[i]]);
  }
  
  return numArr;
}

function stringToInteger(str) {
  var numArr = createNumArr(str);
  var num = 0;
  var i;

  for (i = 0; i < numArr.length; i += 1) {
    num *= 10;
    num += numArr[i];
  }

  return num;
}

console.log(stringToInteger('4321'));
console.log(stringToInteger('570'));