/*
Write a function that displays a 4-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

Examples

diamond(1);
// logs
*

diamond(3);
// logs
 *
***
 *

diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/


/*
- Parameters
  - Integer
    - Height/Width of the diamond.

- Edge
  - Even
  - Zero
  - Negative
  - Float
  - String

- Return
  - Undefined (log, don't return).

- Algorithm
  - Find number of spaces.
    - Math.floor(height / 2)
  - Find number of stars.
    - 1
  - Loop from 1 to height
    - Add to row string the spaces and stars.
    - If i is smaller than half of the height:
      - Decrease spaces by 1.
      - Increase stars by 2.
    - Else:
      - Increase spaces by 1.
      - Decrease stars by 2.
    - Display row string.
*/

function diamond(height) {
  if (invalidInput(height)) {
    console.log('ERROR: Input must be an odd integer greater than 0.');
    return;
  }

  var mid = Math.floor(height / 2)
  var spaces = mid;
  var stars = 1;
  var row = '';
  var i;

  for (i = 0; i < height; i += 1) {
    row = repeatChar(' ', spaces);
    row += repeatChar('*', stars);

    if (i < mid) {
      spaces -= 1;
      stars += 2;
    } else {
      spaces += 1;
      stars -= 2;
    }

    console.log(row);
  }
}

function invalidInput(height) {
  if (typeof height !== 'number' || height <= 0 || !isInteger(height) || !isOdd(height)) {
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

function repeatChar(char, times) {
  var row = '';
  var i;

  for (i = 0; i < times; i += 1) {
    row += char;
  }

  return row;
}

// Test Cases

diamond(1);
// *

diamond(3);
//  *
// ***
//  *

diamond(9);
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

diamond(0);     // ERROR: Input must be an odd integer greater than 0.
diamond(-1);    // ERROR: Input must be an odd integer greater than 0.
diamond(3.14);  // ERROR: Input must be an odd integer greater than 0.
diamond('HI');  // ERROR: Input must be an odd integer greater than 0.
diamond(2);     // ERROR: Input must be an odd integer greater than 0.



/*
The current solution builds a solid diamond, refactor the solution so that it builds a hollow diamond.
*/


/*
Same mental model except for the loop.

- Add spaces to row
- Add star to row
- Add empty space to row (stars - 2)
- Add star to row (If there's more than one star)
*/

function hallowDiamond(height) {
  if (invalidInput(height)) {
    console.log('ERROR: Input must be an odd integer greater than 0.');
    return;
  }

  var mid = Math.floor(height / 2)
  var spaces = mid;
  var stars = 1;
  var row = '';
  var i;

  for (i = 0; i < height; i += 1) {
    row = repeatChar(' ', spaces);
    row += '*';
    row += repeatChar(' ', stars - 2);

    if (stars > 1) {
      row += '*';
    }

    if (i < mid) {
      spaces -= 1;
      stars += 2;
    } else {
      spaces += 1;
      stars -= 2;
    }

    console.log(row);
  }
}

// Test Cases

hallowDiamond(1);
// *

hallowDiamond(3);
//  *
// * *
//  *

hallowDiamond(9);
//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *

hallowDiamond(0);     // ERROR: Input must be an odd integer greater than 0.
hallowDiamond(-1);    // ERROR: Input must be an odd integer greater than 0.
hallowDiamond(3.14);  // ERROR: Input must be an odd integer greater than 0.
hallowDiamond('HI');  // ERROR: Input must be an odd integer greater than 0.
hallowDiamond(2);     // ERROR: Input must be an odd integer greater than 0.