/*
The calculateBonus function calculates the bonus for a given salary. It makes use of two parameters for determining the
bonus: a salary amount and a boolean switch. If the boolean is true, the bonus should be half of the salary; otherwise
the bonus should be 0. Fill in the blanks in the function so that it will work. Explain why it works.

calculateBonus Function and example calls:

function calculateBonus() {
  return ___[1] ? ___[0] / 2 : 0;
}

calculateBonus(2800, true)      // 1400
calculateBonus(1000, false)     // 0
calculateBonus(50000, true)     // 25000
*/

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));
console.log(calculateBonus(1000, false));
console.log(calculateBonus(50000, true));

// All functions have an 'arguments' object that can hold any number of elements, it acts like an array.