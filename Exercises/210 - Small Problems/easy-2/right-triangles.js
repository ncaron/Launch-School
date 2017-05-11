/*
Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n
stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of
the triangle, and the other end at the upper-right.

Examples:

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/

function triangle(height) {
  var row = '';
  var spaces = height - 1;
  var stars = 1;
  var i;
  var j;

  for (i = 0; i < height; i += 1) {
    row = '';

    for(j = 0; j < spaces; j += 1) {
      row += ' ';
    }

    for (j = 0; j < stars; j += 1) {
      row += '*'
    }

    spaces -= 1;
    stars += 1;

    console.log(row);
  }
}

triangle(5);
//triangle(9);