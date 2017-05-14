/*
Write a function that returns the number of Friday the 13ths in the year passed in as an argument. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom), and you may assume that the same calendar will remain in use for the foreseeable future.

Examples:

fridayThe13ths(2015) // 3
fridayThe13ths(1986) // 1
*/

// Create a loop from 0 to 12 to loop through months of the year.
// Check the 13 day if it's a friday and add to the total unlucky days if it is.
// Return amount of unlucky days

function fridayThe13ths(year) {
  var unlucky = 0;
  var date;
  var i;

  for (i = 0; i < 12; i += 1) {
    date = new Date(year, i, 13);

    if (date.getDay() === 5) {
      unlucky += 1;
    }
  }

  return unlucky;
}

console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(1986));