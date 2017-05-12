/*
Write a function that takes a floating point number that represents an angle between 0 and 360 degrees and returns a String that represents that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

Examples:

dms(30);        // 30°00'00"
dms(76.73);     // 76°43'48"
dms(254.6);     // 254°35'59"
dms(93.034773); // 93°02'05"
dms(0);         // 0°00'00"
dms(360);       // 360°00'00" or 0°00'00"

Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown.
*/

function dms(decimalDegree) {
  var degree = String(Math.floor(decimalDegree));
  var minutes = String(Math.floor((decimalDegree - degree) * 60));
  var seconds = String(Math.floor((decimalDegree - degree - (minutes / 60)) * 3600));

  if (minutes < 10) {
    minutes = padZero(minutes);
  }

  if (seconds < 10) {
    seconds = padZero(seconds);
  }

  return String(degree) + '˚' + String(minutes) + '\'' + String(seconds) + '"';
}

function padZero(num) {
  num = Number(num);
  return '0' + String(num);
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));