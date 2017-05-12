/*
Write a program that solicits 6 numbers from the user, then logs a message that describes whether or not the 6th number
appears amongst the first 5 numbers.

Examples:

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].
---

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].
*/

var numArr = [];

numArr.push(Number(prompt('Enter the 1st number:')));
numArr.push(Number(prompt('Enter the 2nd number:')));
numArr.push(Number(prompt('Enter the 3rd number:')));
numArr.push(Number(prompt('Enter the 4th number:')));
numArr.push(Number(prompt('Enter the 5th number:')));

var last = Number(prompt('Enter the last number:'));

if (numArr.indexOf(last) > -1) {
  console.log('The number ' + last + ' appears in [' + numArr + '].');
} else {
  console.log('The number ' + last + ' does not appear in [' + numArr + '].');
}


/*
What if the problem was not looking for a specific number but a number that satisfies a condition, for instance is there
a number > 25? Will the current solution still work? Why or why not? Think about this first before scrolling down:

Possible solution:

function isIncluded(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > val) {
      return true;
    }
  }

  return false;
}

Explore the Array.prototype.some() function and see how you can convert the possible solution given to make use of that
method instead.
*/

var bigger = numArr.some(function(value) {
  return value > last;
});

console.log(bigger);

if (bigger) {
  console.log('There is a value bigger than ' + last + ' in [' + numArr + '].');
} else {
  console.log('There is not a value bigger than ' + last + ' in [' + numArr + '].');
}