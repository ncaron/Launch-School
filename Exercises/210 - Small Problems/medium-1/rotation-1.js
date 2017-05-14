/*
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array as well.

Review the test cases below and then implement the solution accordingly.

rotateArray([7, 3, 5, 2, 9, 1])   // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c'])      // ['b', 'c', 'a']
rotateArray(['a'])                // ['a']
rotateArray([1, 'a', 3, 'c']);    // [ 'a', 3, 'c', 1 ]
rotateArray([{a: 2}, [1, 2], 3]); // [ [1, 2], 3, {a: 2} ]
rotateArray([])                   // []

// return undefined if the argument is not an array
rotateArray();                    // undefined
rotateArray(1);                   // undefined


// the input array is not mutated
x = [1, 2, 3, 4]
rotateArray(x)                  // [2, 3, 4, 1]
console.log(x)                  // [1, 2, 3, 4]
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  var newArr = arr.slice(1);

  if (arr.length > 0) {
    newArr.push(arr[0]);
  }

  return newArr;
}

x = [1, 2, 3, 4]
console.log(rotateArray([7, 3, 5, 2, 9, 1]));
console.log(rotateArray(['a', 'b', 'c']));
console.log(rotateArray(['a']));
console.log(rotateArray([1, 'a', 3, 'c']));
console.log(rotateArray([{a: 2}, [1, 2], 3]));
console.log(rotateArray([]));
console.log(rotateArray());
console.log(rotateArray(1));
console.log(rotateArray(x));
console.log(x);