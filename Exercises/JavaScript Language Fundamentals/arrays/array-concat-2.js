/*
In the previous exercise, the concat version implemented only concatenated 2 arrays. In this exercise you are going to
extend on the functionality by allowing concatenation of 2 or more arrays.

Examples:

concat([1, 2 ,3], [4, 5, 6], [7, 8, 9]);           // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
concat([1, 2], "a", ["one", "two"]);               // [ 1, 2, "a", "one", "two" ]
concat([1, 2], ["three"], 4);                      // [ 1, 2, "three", 4 ]
*/

function concat() {
  var newArr = [];
  var i;
  var j;

  for (i = 0; i < arguments.length; i += 1) {
    if (Array.isArray(arguments[i])) {
      for (j = 0; j < arguments[i].length; j += 1) {
        newArr[newArr.length] = arguments[i][j];
      }
    } else {
      newArr[newArr.length] = arguments[i];
    }
  }

  return newArr;
}

console.log(concat([1, 2 ,3], [4, 5, 6], [7, 8, 9]));
console.log(concat([1, 2], "a", ["one", "two"]));
console.log(concat([1, 2], ["three"], 4));