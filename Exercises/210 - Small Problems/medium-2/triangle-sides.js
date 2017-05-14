/*
A triangle is classified as follows:

Equilateral: All 3 sides are of equal length
Isosceles: 2 sides are of equal length, while the 3rd is different
Scalene: All 3 sides are of different length

To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and all sides must have lengths greater than 0. If either of these conditions are not satisfied, the triangle is invalid.

Write a function that takes the lengths of the 3 sides of a triangle as arguments, and returns a string 'equilateral', 'isosceles', 'scalene', or 'invalid' depending on whether the triangle is equilateral, isosceles, scalene, or invalid.

Examples:

triangle(3, 3, 3)   // equilateral
triangle(3, 3, 1.5) // isosceles
triangle(3, 4, 5)   // scalene
triangle(0, 3, 3)   // invalid
triangle(3, 1, 1)   // invalid
*/

// Create an array with the sides and sort them.
// Check to make sure all are greater than 0, return invalid otherwise.
// Check if two shortest (index 0 and 1), added together are greather than the third, return invalid otherwise.
// Check if all sides are the same, return equilateral.
// check if 2 sides are the same, return isosceles
// return scalene otherwise

function triangle(side1, side2, side3) {
  var sides = [side1, side2, side3].sort();

  if (sides[0] <= 0 || sides[0] + sides[1] <= sides[2]) {
    return 'invalid';
  } else if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return 'equilateral';
  } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));
console.log(triangle(3, 1.5, 3));