/*
Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum
or product of all numbers between 1 and the entered integer.

Examples:

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.


Please enter an integer greater than 0: 6
Enter "s" to compute the sum, "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/

function sum(num) {
  var total = 0;
  var i;

  for (i = 1; i <= num; i += 1) {
    total += i;
  }

  return total;
}

function product(num) {
  var total = 1;
  var i;

  for (i = 1; i <= num; i += 1) {
    total *= i;
  }

  return total;
}

var num = parseInt(prompt('Please enter an integer greater than 0:'), 10);
var compute = prompt('Enter "s" to compute the sum, "p" to compute the product.');
var total;
var i;

while (compute !== 's' && compute !== 'p') {
  compute = prompt('Invalid. Enter "s" for sum or "p" for product.');
}

if (compute === 's') {
  total = sum(num);

  console.log('The sum of the integers between 1 and ' + num + ' is ' + total + '.');
} else if (compute === 'p') {
  total = product(num);

  console.log('The product of the integers between 1 and ' + num + ' is ' + total + '.');
}


/*
What if the input was an array of integers instead of just a number? How would your computeSum and computeProduct
functions change? Given that the input is also an array, how might you make use of the Array.prototype.reduce() function?
*/

function sum2(numArr) {
  return numArr.reduce(function(total, num) {
    return total + num;
  });
}

function product2(numArr) {
  return numArr.reduce(function(total, num) {
    return total * num;
  });
}

var num2 = prompt('Please enter integers greater than 0, seperated by a ","');
var numArr = num2.split(',').map(Number);
var compute2 = prompt('Enter "s" to compute the sum, "p" to compute the product.');
var total2;

while (compute2 !== 's' && compute2 !== 'p') {
  compute2 = prompt('Invalid. Enter "s" for sum or "p" for product.');
}

if (compute2 === 's') {
  total2 = sum2(numArr);

  console.log('The sum of all integers in the array is ' + total2 + '.');
} else if (compute2 === 'p') {
  total2 = product2(numArr);

  console.log('The product of all integers in the array is ' + total2 + '.');
}