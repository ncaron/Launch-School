/*
Build a program that asks a user for the length and width of a room in meters and then logs to the console the area of
the room in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the prompt() function to collect user input.

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.0 square meters (753.47 square feet).
*/

var SQFEET_PER_SQMETER = 10.7639;

var length = parseInt(prompt('Enter the length of the room in meters:'), 10);
var width = parseInt(prompt('Enter the width of the room in meters:'), 10);
var areaMeters = length * width;
var areaFeet = areaMeters * SQFEET_PER_SQMETER;

console.log('The area of the room is ' + areaMeters.toFixed(2) + ' square meters (' + areaFeet.toFixed(2) + ' square feet).');


/*
Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly and
log it and its conversion in parentheses.
*/

var type = prompt('Meters or Feet?').toLowerCase();
var length2 = parseInt(prompt('Enter the length of the room in type:'), 10);
var width2 = parseInt(prompt('Enter the width of the room in type:'), 10);
var area = length2 * width2;

if (type === 'feet') {
  area *= SQFEET_PER_SQMETER;
}

console.log('The area of the room is ' + area.toFixed(2) + ' square ' + type + '.');