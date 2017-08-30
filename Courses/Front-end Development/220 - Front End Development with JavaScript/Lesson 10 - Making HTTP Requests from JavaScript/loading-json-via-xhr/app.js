/*
Exercise 1

Write some JavaScript code that loads JSON data from https://api.github.com/repos/rails/rails, parses the JSON into a JavaScript object, and then logs the HTTP status code and the number of open issues to the console.

200
1159 // This should be whatever the current value is



Exercise 2

Extend the code from the previous exercise to log the message 'The request could not be completed!' to the console when the request produces an error.
*/

var request = new XMLHttpRequest();

request.responseType = 'json';
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.send();

request.addEventListener('load', function(e) {
  try {
    console.log(request.status);
    console.log(request.response['open_issues']);
  } catch (e) {
    console.log('The request could not be completed!');
  }
});