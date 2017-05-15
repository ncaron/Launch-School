/*
As we saw in the previous exercises, a matrix can be represented by an Array of Arrays. For example:

1  5  8
4  7  2
3  9  6

can be described by the Array of Arrays:

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

A 90-degree rotation of a matrix produces a new matrix in which each side of the matrix is rotated clockwise by 90 degrees. For example, the 90-degree rotation of the matrix shown above is:

3  4  1
9  7  5
6  2  8

A 90 degree rotation of a non-square matrix is similar. For example, the rotation of:

3  4  1
9  7  5
is:

9  3
7  4
5  1

Write a function that takes an arbitrary matrix and rotates it 90 degrees clockwise as shown above.

Examples

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8]
]

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3); // matrix2
*/

function transpose(matrix) {
  var transposed = [];
  var newRowsCount = matrix[0].length;
  var row;
  var rows;
  var col;
  var cols;

  for (row = 0; row < newRowsCount; row += 1) {
    transposed.push([]);
  }

  for (row = 0, rows = matrix.length; row < rows; row += 1) {
    for (col = 0, cols = matrix[row].length; col < cols; col += 1) {
      transposed[col].push(matrix[row][col])
    }
  }

  return transposed;
}

function rotate90(matrix) {
  return transpose(matrix).map(function(row) {
    return row.reverse();
  });
}

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8]
]

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);
console.log(newMatrix2);
console.log(newMatrix3);