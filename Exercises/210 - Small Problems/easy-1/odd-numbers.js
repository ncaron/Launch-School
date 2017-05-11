/*
Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.
*/

var i;

for (i = 1; i <= 99; i += 2) {
  console.log(i);
}


/*
Repeat this exercise with a technique different from the one that you used and different from the one provided. Consider
also adding a way for the user to specify the limits of the odd numbers logged to the console.
*/

var limit = prompt('What is te max value?');

for (i = 0; i <= limit; i += 1) {
  if (i % 2 === 1) {
    console.log(i);
  }
}