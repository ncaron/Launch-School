/*
Write a function that takes a year as input and returns the century. The return value should be a string that begins
with the century number, and ends with st, nd, rd, or th as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901-2000 comprise the 20th century.

Examples:

century(2000);        // '20th'
century(2001);        // '21st'
century(1965);        // '20th'
century(256);         // '3rd'
century(5);           // '1st'
century(10103);       // '102nd'
century(1052);        // '11th'
century(1127);        // '12th'
century(11201);       // '113th'
*/

function century(year) {
  var century = Math.ceil(year / 100);
  var suffix = centurySuffix(century);

  return String(century) + suffix;
}

function centurySuffix(century) {
  var lastDigit = century % 10;

  if (century >= 100) {
    century = century % 100;
  }

  if (century >= 4 && century <= 20) {
    return 'th';
  } else if (lastDigit === 1) {
    return 'st';
  } else if (lastDigit === 2) {
    return 'nd';
  } else if (lastDigit === 3) {
    return 'rd';
  }
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));