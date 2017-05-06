/*
Let's build our version of the Array.prototype.shift() and Array.prototype.unshift() methods that manipulates the
contents of an array starting from the first index. The shift function removes the first element of an array and returns
it. The unshift function adds one or more elements to the start of an array and returns the new length. Both shift and
unshift mutate the original array.

Return undefined if the array passed to shift has length 0.

shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4 ,5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2 ,3]);      // 3

var testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]
*/

function shift(arr) {
  var removed = arr[0];
  var i;

  if (arr.length === 0) {
    return undefined;
  }

  for (i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;

  return removed;
}

function unshift(arr) {
  var i;
  var j;
  var current;

  for (i = arguments.length - 1; i > 0; i -= 1) {
    for (j = arr.length; j > 0; j -= 1) {
      arr[j] = arr[j - 1];
    }

    arr[0] = arguments[i];
  }

  return arr.length;
}

console.log(shift([1, 2, 3]));
console.log(shift([]));
console.log(shift([[1, 2, 3], 4 ,5]));

console.log(unshift([1, 2, 3], 5, 6));
console.log(unshift([1, 2, 3]));
console.log(unshift([4, 5], [1, 2 ,3]));

var testArray = [1, 2, 3];
console.log(shift(testArray));
console.log(testArray);
console.log(unshift(testArray, 5));
console.log(testArray);