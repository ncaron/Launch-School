/*
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the
year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year unless the year is
evenly divisible by 400.

Assume this rule is good for any year greater than year 0. Write a function that takes any year greater than 0 as input,
and returns true if the year is a leap year, or false if it is not a leap year.

isLeapYear(2016);     // true
isLeapYear(2015);     // false
isLeapYear(2100);     // false
isLeapYear(2400);     // true
isLeapYear(240000);   // true
isLeapYear(240001);   // false
isLeapYear(2000);     // true
isLeapYear(1900);     // false
isLeapYear(1752);     // true
isLeapYear(1700);     // false
isLeapYear(1);        // false
isLeapYear(100);      // false
isLeapYear(400);      // true
*/

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1752));
console.log(isLeapYear(1700));
console.log(isLeapYear(1));
console.log(isLeapYear(100));
console.log(isLeapYear(400));


/*
The order in which you perform tests for a leap year calculation is important. For what years will isLeapYear fail if
you rewrite it as:

function isLeapYear(year) {
  if (year % 100 === 0) {
    return false;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return year % 4 === 0;
  }
}

Can you rewrite isLeapYear to perform its tests in the opposite order of the above solution? That is, test whether the
year is divisible by 4 first, then, if necessary, test whether it is divisible by 100, and finally, if necessary, test
whether it is divisible by 400. Is this solution simpler or more complex than the original solution?
*/

// The function will fail for years that are divisible by 100 and also 400, example. 1600 will return false when it
// should return true.

function isLeapYear2(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

console.log(isLeapYear2(2016));
console.log(isLeapYear2(2015));
console.log(isLeapYear2(2100));
console.log(isLeapYear2(2400));
console.log(isLeapYear2(240000));
console.log(isLeapYear2(240001));
console.log(isLeapYear2(2000));
console.log(isLeapYear2(1900));
console.log(isLeapYear2(1752));
console.log(isLeapYear2(1700));
console.log(isLeapYear2(1));
console.log(isLeapYear2(100));
console.log(isLeapYear2(400));

// This solution is much more complex.