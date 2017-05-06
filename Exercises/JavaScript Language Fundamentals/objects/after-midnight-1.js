/*
We can use the number of minutes before or after midnight to represent the time of a day. If the number of minutes is
positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

The function below takes a time argument using this minute-based format and returns the time of day in 24 hour format
(hh:mm).

Go over the functions and re-implement it using JavaScript's Date Object.

Examples:

timeOfDay(0);       // "00:00"
timeOfDay(-3);      // "23:57"
timeOfDay(35);      // "00:35"
timeOfDay(-1437);   // "00:03"
timeOfDay(3000);    // "02:00"
timeOfDay(800);     // "13:20"
timeOfDay(-4231);   // "01:29"

Note: Disregard Daylight Savings and Standard Time and other complications.

var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(deltaMinutes) {
  var hours;
  var minutes;

  deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  if (deltaMinutes < 0) {
    deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
  }

  hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  minutes = deltaMinutes % MINUTES_PER_HOUR;

  return padWithZeroes(hours, 2) + ':' + padWithZeroes(minutes, 2);
}

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}
*/

var MILLISECONDS_PER_MINUTE = 60000;

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}

function timeOfDay(deltaMinutes) {
  var midnight = new Date(1, 1, 1, 24);
  var difference = midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE;
  var newTime = new Date(difference);
  var hours = String(newTime.getHours());
  var minutes = String(newTime.getMinutes());

  return padWithZeroes(hours, 2) + ':' + padWithZeroes(minutes, 2);
}

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));