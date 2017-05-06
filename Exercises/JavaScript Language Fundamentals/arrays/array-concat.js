/*
In this exercise you are going to learn more about arrays by implementing your version of the Array.prototype.concat()
method. You will write a function that returns a new array composed of the first array argument and the second array or
value argument. Take note of the following specifications when writing your own concat function.

The first argument is an array. For simplicity, you can assume that this will always be the case.

The concatenation returns a new array

Follow the order of passing of the array arguments

Copy object references from the source arrays to the new array; if you make a change to a reference object in one of the
source arrays after calling concat, those changes should show up in the output array as well.

For strings, numbers, and booleans the concatenation copies the values

function concat(array1, secondArgument) {
  // ...
}

concat([1, 2, 3], [4, 5, 6]);            // [1, 2, 3, 4, 5, 6]
concat([1, 2], 3);                       // [1, 2, 3]
concat([2, 3], ['two', 'three']);        // [2, 3, "two", "three"]
concat([2, 3], 'four');                  // [2, 3, "four"]


var obj = { a: 2, b: 3 };
var newArray = concat([2, 3], obj);      // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
newArray;                                // [2, 3, { a: 'two', b: 3 }]

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];
var arr3 = concat(arr1, arr2);
arr3;                                    // [1, 2, 3, 4, 5, { a: 'two', b: 3 }]
obj.b = 'three';
arr3;                                    // [1, 2, 3, 4, 5, { a: 'two', b: 'three' }]

arr3[5].b = 3;                           // or arr3[5]['b'] = 3
obj;                                     // { a: 'two', b: 3 }
*/

function concat(array1, secondArgument) {
  var newArr = [];
  var i;

  for (i = 0; i < array1.length; i += 1) {
    newArr[i] = array1[i];
  }

  if (Array.isArray(secondArgument)) {
    for (i = 0; i < secondArgument.length; i+= 1) {
      newArr[newArr.length] = secondArgument[i]
    }
  } else {
    newArr[newArr.length] = secondArgument
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));
console.log(concat([1, 2], 3));
console.log(concat([2, 3], ['two', 'three']));
console.log(concat([2, 3], 'four'));


var obj = { a: 2, b: 3 };
var newArray = concat([2, 3], obj);
obj.a = 'two';
console.log(newArray);

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];
var arr3 = concat(arr1, arr2);
console.log(arr3);
obj.b = 'three';
console.log(arr3);

arr3[5].b = 3;
console.log(obj);