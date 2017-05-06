/*
In this exercise, you will implement your own version of two array methods: Array.prototype.pop() and
Array.prototype.push(). pop removes the last element in an array and returns it. If the array is empty when it calls
pop, it returns undefined. push, on the other hand, adds one or more elements to the end of an array and returns the new
length.

var array = [1, 2, 3];
pop(array);                   // 3
console.log(array);           // [1, 2]
pop([]);                      // undefined
pop([1, 2, ['a', 'b', 'c']]); // [ 'a', 'b', 'c' ]

var array = [1, 2, 3];
push(array, 4, 5, 6);         // 6
console.log(array);           // [1, 2, 3, 4, 5, 6]
push([1, 2], ['a', 'b']);     // 3
push([], 1);                  // 1
push([]);                     // 0
*/

function pop(arr) {
  var popped;

  if (arr.length === 0) {
    return undefined;
  }

  popped = arr[arr.length - 1];
  arr.length = arr.length - 1;

  return popped;
}

function push(arr) {
  var i;

  for (i = 1; i < arguments.length; i += 1) {
    arr[arr.length] = arguments[i];
  }

  return arr.length;
}

var array = [1, 2, 3];
console.log(pop(array));
console.log(array);
console.log(pop([]));
console.log(pop([1, 2, ['a', 'b', 'c']]));

var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));
console.log(array);
console.log(push([1, 2], ['a', 'b']));
console.log(push([], 1));
console.log(push([]));