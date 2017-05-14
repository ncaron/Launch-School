/*
A triangle is classified as follows:

Right: One angle of the triangle is a right angle (90 degrees)
Acute: All 3 angles of the triangle are less than 90 degrees
Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees, and all angles must be greater than 0. If either of these conditions are not satisfied, the triangle is invalid.

Write a function that takes the 3 angles of a triangle as arguments, and returns a string 'right', 'acute', 'obtuse', or 'invalid' depending on whether the triangle is a right, acute, obtuse, or invalid triangle.

You may assume integer valued angles so you don't have to worry about floating point errors. You may also assume that the arguments are in degrees.

Examples:

triangle(60, 70, 50)   // acute
triangle(30, 90, 60)   // right
triangle(120, 50, 10)  // obtuse
triangle(0, 90, 90)    // invalid
triangle(50, 50, 50)   // invalid
*/

// Create an array of the angles and sort it
// Check if all angles are greater than 0, return invalid otherwise.
// Reduce the array, if the result is not 180, return invalid.
// Check if only one is 90, return right.
// Check if only one is greater than 90, return obtuse.
// rturn acute otherwise.

function triangle(angle1, angle2, angle3) {
  var angles = [angle1, angle2, angle3].sort();
  var right;
  var obtuse;

  var sum = angles.reduce(function(sum, angle) {
    return sum + angle;
  });

  if (sum !== 180 || angles[0] <= 0) {
    return 'invalid';
  }

  right = angles.filter(function(angle) {
    return angle === 90;
  }).length;

  obtuse = angles.filter(function(angle) {
    return angle > 90;
  }).length;

  if (right === 1) {
    return 'right';
  } else if (obtuse === 1) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

console.log(triangle(60, 70, 50));
console.log(triangle(30, 90, 60));
console.log(triangle(120, 50, 10));
console.log(triangle(0, 90, 90));
console.log(triangle(50, 50, 50));