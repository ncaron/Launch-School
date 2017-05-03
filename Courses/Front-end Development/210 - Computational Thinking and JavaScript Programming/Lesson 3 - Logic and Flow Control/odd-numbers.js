/*
Write a function that takes a positive integer as an argument, and logs
all the odd numbers from 1 to the passed in number (inclusive).
All numbers should be logged on separate lines.

Example

logOddNumbers(19);

//output on console
1
3
5
7
9
11
13
15
17
19
*/

function logOddNumbers(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

logOddNumbers(19);


/*
You can remove the conditional inside the loop and increment i by 2
with each step, instead of 1. How would you write code to do that?
*/

function logOddNumbers(num) {
  for (var i = 1; i <= num; i += 2) {
    console.log(i);
  }
}

logOddNumbers(19);


/*
Instead of a conditional that checks for odd numbers, you can write a
conditional that checks for even numbers, but skips them with the
continue statement. How would you write your code?
*/

function logOddNumbers(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      continue;
    }

    console.log(i);
  }
}

logOddNumbers(19);