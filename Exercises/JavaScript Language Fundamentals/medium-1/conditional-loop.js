/*
Review the code below. The program should log numbers that are multiples of 3 from 0 to 9. Will the expected behavior
happen? Why or why not?

var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}
*/

// No. This will result in an infinite loop on the first iteration.

var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}