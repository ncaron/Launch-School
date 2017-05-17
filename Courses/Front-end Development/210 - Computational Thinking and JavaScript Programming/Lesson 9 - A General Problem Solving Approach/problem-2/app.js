/*
The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card
numbers and Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number to generate
the full number. This number must pass the following test:

- Counting from the rightmost digit and moving left, double the value of every second digit.
- For any digits that thus become 10 or more, subtract 9 from the result.
  - 1111 becomes 2121.
  - 8763 becomes 7733 (from 2x6=12 -> 12-9=3 and 2x8=16 -> 16-9=7).
- Add all these digits together.
  - 1111 becomes 2121 sums as 2+1+2+1 to give a checksum of 6.
  - 8763 becomes 7733, and 7+7+3+3 is 20.

If the total (the checksum) ends in 0 (put another way, if the total modulus 10 is congruent to 0), then the number is
valid according to the Luhn formula; else it is not valid. So, 1111 is not valid (as shown above, it comes out to 6),
while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for
example, "2323 2005 7766 3554" as valid.
You can ignore all non-numeric characters in the input string.
*/


/*
- Check if the number is valid according to the Luhn formula.
  - Moving from right to left, double every second digit.
  - If the digit is 10 or higher, subtract 9 from it.
  - Add all the digits together
  - The modulus should be 0 to be valid.

- Input will be a string of characters.
  - Remove any non-digit from this string.
  - Convert to array.
  - Convert digits in the array to numbers.

- Starting from the right, double every second digit
  - Reverse the array.
  - loop through the array.
  - If index is odd, double the value.
    - If value > 10
      - Subtract 9
  - Reverse the array.

- Reduce the array to get the sum of the numbers.
- sum % 10 should be 0 for the number to be valid.

- RETURN
  - true if valid
  - false if not valid
*/

function luhn(number) {
  number = number.match(/\d/g);

  if (number === null) {
    return false;
  }

  number = doubler(number).map(Number);

  var checksum = number.reduce(function(sum, digit) {
    return sum += digit;
  });

  if (checksum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

// Doubles every second number, starting from the right.
// Subtract 9 if the number gets higher than 10.
function doubler(number) {
  return number.reverse().map(function(digit, index) {
    digit = index % 2 === 1 ? digit * 2 : digit;

    if (digit > 9) {
      digit -= 9;
    }

    return digit;
  }).reverse();
}

// TEST CASES
console.log(luhn('0123456789'));           // false
console.log(luhn('01234567897'));          // true
console.log(luhn('01234b5678a97'));        // true
console.log(luhn('0123-4567-897'));        // true
console.log(luhn('2323 2005 7766 3554'));  // true
console.log(luhn(''));                     // false
console.log(luhn('abcde'));                // false
console.log(luhn('2323 2005 7766 355'));   // false


/*
Write a function that can add a check digit to make the number valid per the Luhn formula and return the original number
plus that digit. This should give "2323 2005 7766 3554" in response to "2323 2005 7766 355".
*/


/*
- Check if number is valid according to Luhn formula.

- VALID
  - Return the number.

- NOT VALID
  - Find the valid number and append it at the end of the invalid number and return the new number.
    - Loop through numbers 0-9 and add it to the number string.
    - Use Luhn formula to check if valid.
      - return the new number if valid, else continue loop.
*/


function addCheckDigit(number) {
  number = number.match(/\d/g);
  var checkDigitIndex = number.length;
  var current;
  var i;

  for (i = 0; i <= 9; i += 1) {
    current = number.join('');

    if (luhn(current)) {
      return current;
    }

    number[checkDigitIndex] = String(i);
  }
}

// TEST CASES
console.log(addCheckDigit('2323 2005 7766 355'));  // '2323200577663554'
console.log(addCheckDigit('2323 2005 7766 3554')); // '2323200577663554'
console.log(addCheckDigit('0123456789'));          // '01234567897'