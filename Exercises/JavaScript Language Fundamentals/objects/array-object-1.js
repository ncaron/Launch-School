/*
Read the code and say what values it will log to the console.

Example

var myArray = ['a', 'b', 'c'];
console.log(myArray[0]);
console.log(myArray[-1]);
myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);
console.log(myArray['e']);
console.log(myArray);
*/

// LOG
// a
// undefined
// d
// 5
// ['a', 'b', 'c', 3, -1: 'd', 'e': 5]

var myArray = ['a', 'b', 'c'];
console.log(myArray[0]);
console.log(myArray[-1]);
myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);
console.log(myArray['e']);
console.log(myArray);