/*
Sort an array of passed in values using merge sort. You can assume that this array may contain only one type of data. And that data may be either all numbers or all strings.

Merge sort is a recursive sorting algorithm that works by breaking down the array elements into nested sub-arrays, then recombining those nested sub-arrays in sorted order. It is best shown by example. For instance, let's merge sort the array [9,5,7,1]. Breaking this down into nested sub-arrays, we get:

[9, 5, 7, 1] ->
[[9, 5], [7, 1]] ->
[[[9], [5]], [[7], [1]]]

We then work our way back to a flat array by merging each pair of nested sub-arrays:

[[[9], [5]], [[7], [1]]] ->
[[5, 9], [1, 7]] ->
[1, 5, 7, 9]

Examples:

mergeSort([9, 5, 7, 1]);                // [1, 5, 7, 9]
mergeSort([5, 3]);                      // [3, 5]
mergeSort([6, 2, 7, 1, 4]);             // [1, 2, 4, 6, 7]
mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler']
mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
*/

function merge(arr1, arr2) {
  var copy1 = arr1.slice();
  var copy2 = arr2.slice();
  var merged = [];

  while (copy1.length > 0 && copy2.length > 0) {
    merged.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return merged.concat(copy1.length === 0 ? copy2 : copy1);
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  var left = arr.slice(0, arr.length / 2);
  var right = arr.slice(arr.length / 2);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

console.log(mergeSort([9, 5, 7, 1]));
console.log(mergeSort([5, 3]));
console.log(mergeSort([6, 2, 7, 1, 4]));
console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));