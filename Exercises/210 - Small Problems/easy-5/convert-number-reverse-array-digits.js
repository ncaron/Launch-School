/*
Write a function that takes a positive integer as an argument and returns that number with its digits reversed. Examples:

reversedNumber(12345); // 54321
reversedNumber(12213); // 31221
reversedNumber(456);   // 654
reversedNumber(12000); // 21 # Note that zeros get dropped!
reversedNumber(1);     // 1
*/

function reversedNumber(num) {
  return Number(String(num).split('').reverse().join(''));
}

console.log(reversedNumber(12345));
console.log(reversedNumber(12213));
console.log(reversedNumber(456));
console.log(reversedNumber(12000));
console.log(reversedNumber(1));