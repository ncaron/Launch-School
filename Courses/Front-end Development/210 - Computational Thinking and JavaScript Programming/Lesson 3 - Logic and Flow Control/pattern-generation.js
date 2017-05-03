/*
Write a function that takes a number of rows as the argument n and logs a square
of numbers and asterisks. For example, if n = 7, log the following pattern:

generatePattern(7);

// console output
1******
12*****
123****
1234***
12345**
123456*
1234567

You may assume that n is greater than 1 and less than 10
*/

function generatePattern(height) {
  for (var row = 1; row <= height; row++) {
    var rowPattern = '';

    for (var col = 1; col <= height; col++) {
      if (col <= row) {
        rowPattern += col;
      } else {
        rowPattern += '*';
      }
    }

    console.log(rowPattern);
  }
}

generatePattern(7);


/*
Have you tried supplying generatePattern() with a number greater than 9?
What did you observe? Can you fix the current implementation so it still
renders as a rectangle?
*/

function generatePattern2(height) {
  for (var row = 1; row <= height; row++) {
    var rowPattern = '';

    for (var col = 1; col <= height; col++) {
      if (col <= row) {
        rowPattern += col;
      } else {
        for (var k = 0; k < String(col).length; k++) {
          rowPattern += '*';
        }
      }
    }

    console.log(rowPattern);
  }
}

generatePattern2(20);