/*
Exercise 1

Write a JavaScript function delayLog that loops through the numbers from 1 to 10, and logs each number after that number of seconds. So 1 should be logged after 1 second, 2 after 2 seconds, etc.
*/

function makeLogger(number) {
  return function() {
    console.log(number);
  }
}

function delayLog() {
  var logger;
  var i;

  for (i = 1; i <= 10; i += 1) {
    logger = makeLogger(i);
    setTimeout(logger, i * 1000);
  }
}

delayLog();