/*
In this program we're going to explore the basic arithmetic operations in JavaScript. The program below prompts the user
for two positive integers and then logs the results of the following operations on those two numbers: addition,
subtraction, product, quotient, remainder, and power. For this exercise, assume positive integers as inputs.

Here is our expected result after running the program.

Enter the first number: 23
Enter the second number: 17

23 + 17 = 40
23 - 17 = 6
23 * 17 = 391
23 / 17 = 1
23 % 17 = 6
23 ** 17 = 1.4105003956066297e+23
Here is the code for the program.

var number1 = prompt('Enter the first number:');
var number2 = prompt('Enter the second number:');

console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));

Did the results of the program match what you expected? Why or why not? If not can you fix it?
*/

var number1 = prompt('Enter the first number:');
var number2 = prompt('Enter the second number:');

console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));


// The console does not log what is expected because the string because + also acts as concatination for strings and
// since the user inputs are coming in as strings, addiction concatinates them instead of adding them.
// To fix this, the numbers should be converted to numbers before any operation is done on them.

var number3 = Number(prompt('Enter the first number:'));
var number4 = Number(prompt('Enter the second number:'));

console.log(number3 + ' + ' + number4 + ' = ' + (number3 + number4));
console.log(number3 + ' - ' + number4 + ' = ' + (number3 - number4));
console.log(number3 + ' * ' + number4 + ' = ' + (number3 * number4));
console.log(number3 + ' / ' + number4 + ' = ' + Math.floor(number3 / number4));
console.log(number3 + ' % ' + number4 + ' = ' + (number3 % number4));
console.log(number3 + ' ** ' + number4 + ' = ' + Math.pow(number3, number4));