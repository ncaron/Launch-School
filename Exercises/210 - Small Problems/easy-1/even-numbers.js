/*
Log the even numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.
*/

var i;

for (i = 1; i <= 99; i += 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
}