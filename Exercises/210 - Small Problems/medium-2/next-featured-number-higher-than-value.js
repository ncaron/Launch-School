/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, and whose digits occur exactly once each. So, for example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes a single integer as an argument, and returns the next featured number that is greater than the argument. Issue an error message if there is no next featured number.

Examples:

featured(12)        // 21
featured(20)        // 21
featured(21)        // 35
featured(997)       // 1029
featured(1029)      // 1043
featured(999999)    // 1023547
featured(999999987) // 1023456987
*/

// Loop from the number until no more featured numbers are possible.
// Max is 9876543210
// Find the first number that is odd and multiple of 7, add 14 to the rest.
// Return the number is digits appear only once, is odd and multiple of 7.

function featured(num) {
  var max = 9876543210;
  num += 1;

  while (num % 2 === 0 || num % 7 !== 0) {
    num += 1;
  }

  while (num <= max) {
    if (uniqueDigits(num)) {
      return num;
    } else {
      num += 14;
    }
  }

  return 'No featured number possible.'
}

function uniqueDigits(num) {
  var digitArr = String(num).split('');
  var unique = [];
  var i;

  for (i = 0; i < digitArr.length; i += 1) {
    if (unique.indexOf(digitArr[i]) === -1) {
      unique.push(digitArr[i]);
    } else {
      return false;
    }
  }

  return true;
}

console.log(featured(12));
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(999999987));