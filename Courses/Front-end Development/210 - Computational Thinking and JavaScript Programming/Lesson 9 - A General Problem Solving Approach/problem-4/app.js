/*
You are given a list of numbers in "short-hand" range notation where only the significant part of the next number is
written because we know the numbers are always increasing (ex. "1,3,7,2,4,1" represents [1, 3, 7, 12, 14, 21]). Some
people use different seperators for their ranges (ex. "1-3,1-2", "1:3,1:2", "1..3,1..2" represent [1, 2, 3, 11, 12]).
Range limits are always inclusive.

Your job is the return a list of the complete numbers.

The possible seperators are: ["-", ":", ".."]
*/

/*
- INPUT
  -  String
    -  The list of short hand numbers and ranges

- RETURN
  - Array
    - Numbers converted to long form in increasing order
    - Numbers and ranges are seperated by ,
    - Range seperatorsare - : ..

- ALGORITHM
  - Create an array to hold all the new numbers
  - SPLIT the string at each , to get an array of numbers/ranges
  - FOREACH value in numbers/ranges array
    - SPLIT the current value at the range seperators - : ..
    - MAP each number string to a Number
    - IF the length of the split is 1, it means it's a number, not a range
      - PUSH this number to the new numbers array
        - IF the number is smaller or equal than the previous one in the array
          - Add 10 to it until it's bigger
    - ELSE it means the number is a range
      - PUSH each number to the new numbers array
        -  IF the number is smaller or equal than the previous one in the array
          - Add 10 to it until it's bigger
  - RETURN the array
*/

function longHand(numbers) {
  numbers = numbers.split(',');
  var longHandArr = [];
  var i;

  numbers.forEach(function(element) {
    element = element.split(/\.\.|\-|\:/).map(Number);

    if (element.length === 1) {
      longHandArr.push(getNextNumber(longHandArr, element[0]));
    } else {
      element = longHand(element.join(','));

      for (i = element[0]; i <= element[1]; i += 1) {
        longHandArr.push(getNextNumber(longHandArr, i));
      }
    }
  });

  return longHandArr;
}

function getNextNumber(arr, value) {
  var previous = arr[arr.length - 1] || -1;

  while (value < previous) {
    value += 10;
  }

  return value;
}


// TEST CASES
console.log(longHand('1,3,7,2,4,1'));    // [1, 3, 7, 12, 14, 21]
console.log(longHand('1-3,1-2'));        // [1, 2, 3, 11, 12]
console.log(longHand('1:3,1:2'));        // [1, 2, 3, 11, 12]
console.log(longHand('1..3,1..2'));      // [1, 2, 3, 11, 12]
console.log(longHand('1..3,2..1'));      // [1, 2, 3, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
console.log(longHand('1, 2-7, 3:1'));    // [1, 2, 3, 4, 5, 6, 7, 13, 14, 15, 16, 17, 18, 19, 20, 21]