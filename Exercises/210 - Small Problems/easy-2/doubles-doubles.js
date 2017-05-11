/*
A double number is an even length number whose left-side digits are exactly the same as its right-side digits. For
example, 44, 3333, 103103, 7676 are all double numbers. 444, 334433, and 107 are not.

Write a function that returns 2 times the number provided as an argument, unless the argument is a double number; return
double numbers as-is.

Examples:

twice(37);                 // 74
twice(44);                 // 44
twice(334433);             // 668866
twice(444);                // 888
twice(107);                // 214
twice(103103);             // 103103
twice(3333);               // 3333
twice(7676);               // 7676
*/

function twice(num) {
  var numString = String(num);
  var firstHalf = numString.substring(0, numString.length / 2);
  var secondHalf = numString.substring(numString.length / 2);

  if (firstHalf !== secondHalf) {
    return num * 2;
  } else {
    return num;
  }
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));