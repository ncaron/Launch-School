/*
Re-implement the Array.prototype.slice() and Array.prototype.splice() methods of the Array object.

The slice function takes an array as an argument and two indices representing a begin and an end index. It returns a new
array containing the extracted elements starting from begin up to but not including end. The slice function does not
mutate the array.

The splice function changes the elements of an array by deleting and/or adding new elements. It takes an array, a start,
a deleteCount, and optional items as arguments. It returns an array containing the deleteCount elements removed starting
from start. If no elements are removed, it returns an empty array ([]). If the optional items are provided, splice
inserts it starting from start. The splice function mutates the original array.

In solving this exercise, you may assume the following:

Slice:

The values passed for begin and end are integers greater than or equal to 0.

If begin or end is greater than the length of the array set it to equal the length.

Splice:

The values passed for start and deleteCount are integers greater than or equal to 0.

If the value for start is greater than the length of the array set it to equal the length.

If the value of deleteCount is greater than the number of elements from start up to the end, set the value of
deleteCount to the difference between the array length and start

Examples

function slice(array, begin, end) {
  // ...
}

slice([1, 2, 3], 1, 2);           // [2]
slice([1, 2, 3], 2, 0);           // []
slice([1, 2, 3], 5, 1);           // []

var arr = [1, 2, 3];
slice(arr, 1, 3);                 // [2, 3]
arr;                              // [1, 2, 3]

function splice(array, start, deleteCount[, item1[, itemN]]) {
  // ...
}

splice([1, 2, 3], 1, 2);                   // [2, 3]
splice([1, 2, 3], 1, 3);                   // [2, 3]
splice([1, 2, 3], 1, 0);                   // []
splice([1, 2, 3], 0, 1);                   // [1]
splice([1, 2, 3], 1, 0, 'a')               // []

var arr = [1, 2, 3];
splice(arr, 1, 1, 'two');                  // [2]
arr;                                       // [1, 'two', 3];

var arr = [1, 2, 3];
splice(arr, 1, 2, 'two', 'three')          // [2 ,3]
arr;                                       // [1, "two", "three"]

var arr = [1, 2, 3];
splice(arr, 1, 0);                         // []
splice(arr, 1, 0, 'a');                    // []
arr;                                       // [1, 'a', 2, 3]

var arr = [1, 2, 3];
splice(arr, 0, 0, 'a');                    // []
arr;                                       // ['a', 1, 2, 3]
*/

function slice(array, begin, end) {
  var newArr = [];
  var i;

  if (begin > array.length) {
    begin = array.length;
  }

  if (end > array.length) {
    end = array.length;
  }

  for (i = begin; i < end; i += 1) {
    newArr.push(array[i]);
  }

  return newArr;
}

console.log(slice([1, 2, 3], 1, 2));
console.log(slice([1, 2, 3], 2, 0));
console.log(slice([1, 2, 3], 5, 1));

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3));
console.log(arr);

function splice(array, start, deleteCount) {
  var removed = [];
  var arrCopy = array.slice();
  var items = slice(arguments, 3, arguments.length);
  var i;

  if (start > array.length) {
    start = array.length;
  }

  if (deleteCount > array.length - start) {
    deleteCount = array.length - start;
  }

  for (i = 0; i < deleteCount; i += 1) {
    removed.push(array[start + i]);
  }

  for (i = 0; i < start; i += 1) {
    array[i] = arrCopy[i];
  }

  for (i = 0; i < items.length; i += 1) {
    array[i + start] = items[i];
  }

  for (i = 0; i < arrCopy.length; i += 1) {
    array[i + start + items.length] = arrCopy[i + start + deleteCount];
  }

  array.length = arrCopy.length + items.length - removed.length;

  return removed;
}

console.log(splice([1, 2, 3], 1, 2));
console.log(splice([1, 2, 3], 1, 3));
console.log(splice([1, 2, 3], 1, 0));
console.log(splice([1, 2, 3], 0, 1));
console.log(splice([1, 2, 3], 1, 0, 'a'));

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));
console.log(arr);

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));
console.log(arr);

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));
console.log(splice(arr, 1, 0, 'a'));
console.log(arr);

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));
console.log(arr);