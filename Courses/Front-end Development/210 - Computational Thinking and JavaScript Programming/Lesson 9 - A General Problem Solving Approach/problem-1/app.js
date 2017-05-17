/*
Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits,
the number may also contain special characters such as space, dash, dot and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits assume that it is a bad number.
If the phone number is 10 digits assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits assume that it is a bad number.

For bad numbers, just return a string of 10 '0'.
*/

/*
- User input
  - A string containing any characters

- Clean a phone number
  - Remove all characters other than digits.
    - Use regex to get the characters in an array.

- BAD NUMBERS
  - Less than 10 digits.
  - More than 11 digits
  - 11 digits but the first is not a 1.

- GOOD NUMBERS
  - 10 digits.
  - 11 digits but the first is a 1.
    - slice the first 1 from the numbers.

- RETURN
  - If good number, return the number in string form.
  - If bad number, return a string of 10 '0'.
*/

function cleanNumber(number) {
  var cleanedNumbers = number.replace(/\D/g, '');

  if (cleanedNumbers.length === 10) {
    return cleanedNumbers;
  } else if (cleanedNumbers.length === 11 && cleanedNumbers[0] === '1') {
    return cleanedNumbers.slice(1);
  } else {
    return '0000000000';
  }
}

// TEST CASES
console.log(cleanNumber('0123456789'));       // 0123456789
console.log(cleanNumber('10123456789'));      // 0123456789
console.log(cleanNumber('012-345-6789'));     // 0123456789
console.log(cleanNumber('1012-345-6789'));    // 0123456789
console.log(cleanNumber('2012-345-6789'));    // 0000000000
console.log(cleanNumber('012-345-678*9'));    // 0123456789
console.log(cleanNumber('0'));                // 0000000000
console.log(cleanNumber('01x2-3gf45-678*9')); // 0123456789
console.log(cleanNumber(''));                 // 0000000000