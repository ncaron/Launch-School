/*
You are given a list of numbers in "short-hand" range notation where only the significant part of the next number is
written because we know the numbers are always increasing (ex. "1,3,7,2,4,1" represents [1, 3, 7, 12, 14, 21]). Some
people use different seperators for their ranges (ex. "1-3,1-2", "!:3,1:2", "1..3,1..2" represent [1, 2, 3, 11, 12]).
Range limits are always inclusive.

Your job is the return a list of the complete numbers.

The possible seperators are: ["-", ":", ".."]
*/


/*
- Take a string of numbers and delimiters
  - Numbers are in short form (12 would be 2)
  - Numbers are always increasing.
  - , means numbers
  - - : .. means range of numbers

- Find the long version of the numbers such that they are all increasing.

- Return the list of complete numbers.
  - Array

- Algorithm
  - Split the string into digit arrays using ,
  - change range of numbers to numbers.
    - split the range in numbers.
  - Map the digit characters to numbers.
  - Loop through each number, if the number is smaller than the previous, increase the 10s digit until it is bigger.
    - To eliminate a few of the +10 loops, figure out which to add first.
      - If 45, 7... Need to add 10 to 7 four times. (45/10 + 7)
*/

function longHand(numberStr) {
  var numArr = numberStr.split(/,/);
  expandRanges(numArr);
  var i;

  /*for (i = 1; i < numArr.length; i += 1) {
    numArr[i] = getNextBiggest(numArr[i], numArr[i - 1])
  }*/

  return numArr;
}

function getNextBiggest(number1, number2) {
  number1 += (Math.floor(number2 / 10)) * 10;

  while (number1 <= number2) {
    number1 += 10;
  }

  return number1;
}

function expandRanges(numArr) {
  numArr = numArr.split(/:|-|\.\./);
  console.log(numArr);
}


//console.log(longHand('1,3,1,2'));  // [1, 3, 11, 12]
//console.log(longHand('1'));        // [1]
console.log(longHand('1-3,1-2'));