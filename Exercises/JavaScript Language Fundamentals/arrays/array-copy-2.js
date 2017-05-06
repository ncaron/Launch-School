/*
In the previous exercise, the value of the reference gets copied. Implement two(2) alternative ways of copying just the
values and not the reference.

Here's the code from the previous exercise:

var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
*/


// 1
var myArray1 = [1, 2, 3, 4];
var myOtherArray1 = [];
var i;

for (i = 0; i < myArray1.length; i += 1) {
  myOtherArray1.push(myArray1[i]);
}

myArray1.pop();
console.log(myArray1);
console.log(myOtherArray1);


// 2
var myArray2 = [1, 2, 3, 4];
var myOtherArray2 = myArray2.slice();

myArray2.pop();
console.log(myArray2);
console.log(myOtherArray2);