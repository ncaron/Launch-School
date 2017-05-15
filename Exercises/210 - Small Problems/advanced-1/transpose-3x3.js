/*
A 3 x 3 matrix can be represented by an Array of Arrays in which the main Array and all of the sub-Arrays has 3 elements. For example:

1  5  8
4  7  2
3  9  6
can be described by the Array of Arrays:

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

An Array of Arrays is sometimes called nested arrays because each of the inner Arrays is nested inside an outer Array.

To access an element in matrix, you use Array[][] with both the row index and column index. So, in this case, matrix[0][2] is 8, and matrix[2][1] is 9. An entire row in the matrix can be referenced by just using one index: matrix[1] is the row (an Array) [4, 7, 2]. Furthermore, given one row, we can also get the length of the column by getting the number of elements in a row. Unfortunately, there's no convenient notation for accessing an entire column.
The transpose of a 3 x 3 matrix is the matrix that results from exchanging the columns and rows of the original matrix. For example, the transposition of the array shown above is:

1  4  3
5  7  9
8  2  6

Write a function that takes a 3 x 3 matrix in Array of Arrays format and returns the transpose of the original matrix. Your task is to do this yourself don't use external libraries.

Take care not to modify the original matrix: you must produce a new matrix and leave the original matrix unchanged.

Examples

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

var newMatrix = transpose(matrix)

console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);    // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
*/

function transpose(matrix) {
  var transposed = [];
  var row = [];
  var i;
  var j;

  for (i = 0; i < matrix.length; i += 1) {
    row = [];

    for (j = 0; j < matrix[i].length; j += 1) {
      row.push(matrix[j][i]);
    }
    
    transposed.push(row);
  }

  return transposed;
}

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

var newMatrix = transpose(matrix)

console.log(newMatrix);
console.log(matrix);