/*
As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight.
If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is
before midnight.

The functions below do the reverse of the previous exercise. It takes a 24hour time argument and returns the number of
minutes before and after midnight, respectively. Both methods should return a value in the range of 0..1439.

Refactor the functions below so that it uses the Date object.

Examples:

afterMidnight('00:00');        // 0
beforeMidnight('00:00');       // 0
afterMidnight('12:34');        // 754
beforeMidnight('12:34');       // 686

Note: Disregard Daylight Savings and Standard Time and other irregularities.

var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  var timeComponents = timeStr.split(':');
  var hours = parseInt(timeComponents[0]);
  var minutes = parseInt(timeComponents[1]);

  return hours * MINUTES_PER_HOUR + minutes;
}

function beforeMidnight(timeStr) {
  var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}
*/

var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
var MILLISECONDS_PER_MINUTE = 60000;
var DATE = '1/1/2000';

function afterMidnight(timeStr) {
  var midnight = new Date(DATE + ' 00:00').getTime();
  var current = new Date(DATE + ' ' + timeStr).getTime();

  return (current - midnight) / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

console.log(afterMidnight('00:00'));
console.log(beforeMidnight('00:00'));
console.log(afterMidnight('12:34'));
console.log(beforeMidnight('12:34'));