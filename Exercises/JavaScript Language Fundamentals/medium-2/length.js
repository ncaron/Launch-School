/*
Read through the code below. What values will it log to the console? Can you explain why these are the values?

var languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);
console.log(languages.length);

languages.length = 4;
console.log(languages);
console.log(languages.length);

languages.length = 1;
console.log(languages);
console.log(languages.length);

languages.length = 3;
console.log(languages);
console.log(languages.length);

languages.length = 1;
languages[2] = 'Python';
console.log(languages);
console.log(languages[1]);
console.log(languages.length);
*/

// LOG
// ['JavaScript', 'Ruby, 'Python']
// 3
// ['JavaScript', 'Ruby, 'Python', undefined]
// 4
// ['JavaScript']
// 1
// ['JavaScript', undefined, undefined]
// 3
// ['JavaScript', undefined, 'Python']
// undefined
// 3

// Explicitly setting the length of the array to be larger than it already is, will fill the remaining values with undefined.
// Explicitly setting the length of the array to be lower than it already is, will splice the array from 0 to length provided.
// Setting an element at an index greater than the length of the array will fill the elements in between with undefined.

var languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);
console.log(languages.length);

languages.length = 4;
console.log(languages);
console.log(languages.length);

languages.length = 1;
console.log(languages);
console.log(languages.length);

languages.length = 3;
console.log(languages);
console.log(languages.length);

languages.length = 1;
languages[2] = 'Python';
console.log(languages);
console.log(languages[1]);
console.log(languages.length);