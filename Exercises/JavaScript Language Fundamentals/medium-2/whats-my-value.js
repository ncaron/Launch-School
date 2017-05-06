/*
What will the following program log to the console? Can you explain why?

var arr = ['Apples', 'Peaches', 'Grapes'];

arr[3.4] = 'Oranges';
console.log(arr.length);
console.log(Object.keys(arr).length);

arr[-2] = 'Watermelon';
console.log(arr.length);
console.log(Object.keys(arr).length);
*/

// LOG
// 3
// 4
// 3
// 5

// Properties of the arrays which are not a positive integer do not add to the length of the array.
// Here, 3.4 and -2 are in the array as 3.4: 'Oranges' and -2: 'Watermelon' but do not add to the length.
// Object.keys will take all the keys in the array and create a new array. ['0', '1', '2', '3.4', '-2']

var arr = ['Apples', 'Peaches', 'Grapes'];

arr[3.4] = 'Oranges';
console.log(arr.length);
console.log(Object.keys(arr).length);

arr[-2] = 'Watermelon';
console.log(arr.length);
console.log(Object.keys(arr).length);