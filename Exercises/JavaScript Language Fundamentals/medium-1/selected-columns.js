/*
The getSelectedColumns function selects and extracts specific columns to a new array. Currently, it is not producing the
expected behavior. Go over the function and the sample runs. What do you think is the problem?

function getSelectedColumns(numbers, cols) {
  var result = [];
  for (var i = 0, length = numbers.length; i < length; i++) {
    for (var j = 0, length = cols.length; j < length; j++) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// Given array of number arrays
var array1 = [[1, 2, 3], [4, 5 ,6], [7, 8 ,9]];
var array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// array1 in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

getSelectedColumns(array1, [0]);     // [[1]]; expected [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 4]]; expected [[2, 2, 2], [3, 3, 3]]
*/

// The second loop changed the value of the length variable.

function getSelectedColumns(numbers, cols) {
  var result = [];
  for (var i = 0, length = numbers.length; i < length; i++) {
    for (var j = 0, length = cols.length; j < length; j++) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

var array1 = [[1, 2, 3], [4, 5 ,6], [7, 8 ,9]];
var array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];



console.log(getSelectedColumns(array1, [0]));
console.log(getSelectedColumns(array1, [0, 2]));
console.log(getSelectedColumns(array2, [1, 2]));