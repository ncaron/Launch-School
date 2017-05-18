/*
Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid or n is 7.

Examples

star(7)
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9)
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
*/


/*
- Parameters
  - Integer
    - Height/Width of the star.
    - Must be odd and greater than 6.

- Edge
  - Even
  - Less than 7
  - Float
  - String

- Return
  - Undefined (log, don't return)

- Algorithm
  - Determine if valid input.
  - Find half of the number
    - Math.floor(height / 2)
  - Create the first row and add it to an array of rows.
  - Calculate initial leading spaces
    - Half - 1
  - Initial spaces between stars = 0
  - Loop half times:
    - Build the row
      - Add Spaces
      - Add stars
    - unshift AND push the row to the array of rows.
    - Decrease leading spaces
    - Increase space between.
  - Loop through the array:
    - Log each row.
*/

function star(height) {
  if (invalidInput(height)) {
    console.log('ERROR: Must be an odd integer greater than 6.');
    return;
  }

  var rows = [firstRow(height)];
  var half = Math.floor(height / 2);
  var leadingSpaces = half - 1;
  var spacesBetween = 0;
  var i;

  for (i = 0; i < half; i += 1) {
    row = buildRow(leadingSpaces, spacesBetween);
    rows.unshift(row);
    rows.push(row);
    leadingSpaces -= 1;
    spacesBetween += 1;
  }

  displayRows(rows);
}

function invalidInput(height) {
  if (typeof height !== 'number' || height < 7 || !isInteger(height) || !isOdd(height)) {
    return true;
  } else {
    return false;
  }
}

function isInteger(num) {
  return num % 1 === 0;
}

function isOdd(num) {
  return num % 2 === 1;
}

function firstRow(height) {
  var row = '';
  var i;

  for (i = 0; i < height; i += 1) {
    row += '*';
  }

  return row;
}

function buildRow(leading, between) {
  var row = '';
  var i;
  var j = 0;

  for (i = 0; i < leading; i += 1) {
    row += ' ';
  }

  while (true) {
    row += '*';
    j += 1;

    if (j === 3) {
      break;
    }

    for (i = 0; i < between; i += 1) {
      row += ' ';
    }
  }

  return row;
}

function displayRows(rows) {
  rows.forEach(function(row) {
    console.log(row);
  });
}


// Test Cases

star(7);
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

star(15);
// *      *      *
//  *     *     *
//   *    *    *
//    *   *   *
//     *  *  *
//      * * *
//       ***
// ***************
//       ***
//      * * *
//     *  *  *
//    *   *   *
//   *    *    *
//  *     *     *
// *      *      *

star(6);
// ERROR: Must be an odd integer greater than 6.

star('Hi');
// ERROR: Must be an odd integer greater than 6.

star(7.42);
// ERROR: Must be an odd integer greater than 6.