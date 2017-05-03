/*
Create a function that computes the Greatest Common Divisor of two
positive integers.

Example

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1
*/

function gcd(num1, num2) {
  var min;
  var max;

  if (num1 < num2) {
    min = num1;
    max = num2;
  } else {
    min = num2;
    max = num1;
  }

  if (max % min === 0) {
    return min;
  } else {
    return max % min;
  }
}

console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));
console.log(gcd(12, gcd(4, 8)));

/*
Our solution works with only two numbers. Can you expand it to accept an
array of two or more numbers instead?
*/

function gcd2(nums) {
  while (nums.length !== 1) {
    nums.push(gcd(nums.pop(), nums.pop()));
  }

  return nums.pop();
}

console.log(gcd2([24, 8, 8, 48]));