/*
Exercise 1

Create a variable named today with the current date and time as its value.
*/

var today = new Date();

console.log(today);

/* -----------------------------------------------------*/


/*
Exercise 2

Log a string, "Today's day is 5", that tells the current day of the week as a number between 0 and 6
(Sunday is 0, Saturday is 6). Use the getDay method to obtain the number of the day of week.
*/

var todayIndex = String(today.getDay());

console.log('Today\'s day is ' + todayIndex);


/* -----------------------------------------------------*/


/*
Exercise 3

The getDay method, like many of the get methods on the date object, returns a zero-based index of the current day of
week instead of the day name. This enables support for multiple locales and formats. Modify the output message of the
previous exercise to show the 3-letter day name abbreviation. You may use the following array:

var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
*/

var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var weekDay = daysOfWeek[todayIndex];

console.log('Today\'s day is ' + weekDay);


/* -----------------------------------------------------*/


/*
Exercise 4

Let's add the calendar date (the day of month) to our log message: "Today's date is Mon, the 6th". Use the getDate
method to obtain the current day of month. Don't worry about using different suffixes for numbers that end with 1, 2,
or 3 just yet; we'll deal with that in the next exercise.
*/

var day = String(today.getDate());

console.log('Today\'s date is ' + weekDay + ', the ' + day);


/* -----------------------------------------------------*/


/*
Exercise 5

Ideally, the suffix on the day number needs to adjust to the proper suffix for days like the 1st, 22nd, and 3rd. Write a
function named dateSuffix that takes the day of month as a numeric value and returns the formatted day of month and
suffix. Make sure you use the correct suffixes.
*/

function dateSuffix(day) {
  var suffix;

  if (day % 10 === 1 && day !== 11) {
    suffix = 'st';
  } else if (day % 10 === 2 && day !== 12) {
    suffix = 'nd';
  } else if (day % 10 === 3 && day !== 13) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return day + suffix;
}

console.log('Today\'s date is ' + weekDay + ', the ' + dateSuffix(todayIndex));


/* -----------------------------------------------------*/


/*
Exercise 6

Change your output to include the value from the getMonth method. Thus, the logged string will read "Today's date is Mon,
11 6th", where 11 is the month number returned by getMonth.
*/

var monthIndex = String(today.getMonth());

console.log('Today\'s date is ' + weekDay + ', ' +  monthIndex + ' ' + dateSuffix(todayIndex));


/* -----------------------------------------------------*/


/*
Exercise 7

Let's make the month readable. Using the same technique we used in exercise 3, convert the month number in the output
string to a 3-letter month name abbreviation. You may use the following array:

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
*/

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var month = months[monthIndex];

console.log('Today\'s date is ' + weekDay + ', ' +  month + ' ' + dateSuffix(todayIndex));

/* -----------------------------------------------------*/


/*
Exercise 8

Our call to console.log is getting cluttered. Let's clean things up a bit and refactor the code into a few formatting
functions that we can call from anywhere in our code. Create formattedMonth and formattedDay functions to format the
month and day, then write a formattedDate function that pulls everything together and logs the fully formatted date.
*/

function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);

  console.log('Today\'s date is ' + day + ', ' +  month + ' ' + dateSuffix(todayIndex));
}

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

formattedDate(today);


/* -----------------------------------------------------*/


/*
Exercise 9

Log the values returned from the getFullYear and getYear methods. Note how these values differ. Note especially that
getYear is deprecated: you should avoid using deprecated methods as they may one day disappear.
*/

console.log(today.getFullYear());
console.log(today.getYear());


/* -----------------------------------------------------*/


/*
Exercise 10

Use the getTime method and log the current date and time in total milliseconds since Jan. 1st 1970.
*/

console.log(today.getTime());


/* -----------------------------------------------------*/


/*
Exercise 11

Create a new date object variable named tomorrow that contains a Date object. Initialize the variable by setting it to
the value of today. You can get the value of today using the getTime method. Next, change the date on the tomorrow
object to the day after today: you should use setDate to change the date. Finally, log the tomorrow object with your
formattedDate function.
*/

var tomorrow = new Date(today.getTime());
tomorrow.setDate(tomorrow.getDate() + 1);

formattedDate(tomorrow);


/* -----------------------------------------------------*/


/*
Exercise 12

Create a new variable named nextWeek that is a new Date copied from the today object. Compare nextWeek and today, and
log the results. Are they equal? Why or why not?
*/

var nextWeek = new Date(today.getTime());

console.log(today === nextWeek);

// They are not equal because even though they contain the same values, they are not the same object.


/* -----------------------------------------------------*/


/*
Exercise 13

The === operator only returns true with Date objects if the objects are the same object. Since we have two different
objects (with the same values), we must instead compare the values represented by those objects. Compare the values
returned by toDateString to determine whether the two objects are equal. Finally, add 7 days to the nextWeek date and
compare the two objects again.
*/

console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(today.getDate() + 7);

console.log(today.toDateString() === nextWeek.toDateString());


/* -----------------------------------------------------*/


/*
Exercise 14

Finally, write a function named formatTime that returns a string formatted with the hours and minutes as "15:30". Make
sure you handle the case where the hours or minutes has only one digit: you need to pad the value with a leading zero in
such cases, e.g., "03:04". You can use the getHours and getMinutes methods to obtain the hours and minutes.
*/

function formatTime(date) {
  var hour = String(date.getHours());
  var minute = String(date.getMinutes());

  hour < 10 ? hour = '0' + hour : hour;
  minute < 10 ? minute = '0' + minute : minute;

  return hour + ':' + minute;
}

console.log(formatTime(today));