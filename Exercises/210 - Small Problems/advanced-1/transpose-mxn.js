/*
In the previous exercise, you wrote a function to transpose a 3 x 3 matrix as represented by an Array of Arrays.

Matrix transposes aren't limited to 3 x 3 matrices, or even square matrices. Any matrix can be transposed by simply switching columns with rows.

Modify your transpose function from the previous exercise so it works with any matrix with at least 1 row and 1 column.

Examples:

transpose([[1, 2, 3, 4]]);       // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]); // [[1, 2, 3, 4]]
transpose([[1]]);                // [[1]]
transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
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

console.log(transpose([[1, 2, 3, 4]]));
console.log(transpose([[1], [2], [3], [4]]));
console.log(transpose([[1]]));
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));