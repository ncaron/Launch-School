/*
Write a function that will take a short line of text, and write it to the console log within a box.

Example:

logInBox('To boldly go where no one has gone before.');

will log on the console:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');

+--+
|  |
|  |
|  |
+--+

You may assume that the output will always fit in your browser window.
*/

function logInBox(msg) {
  var len = msg.length + 2;
  var topBottomBorder = topBottom(len);
  var empty = padding(len);
  var middle = '| ' + msg + ' |';

  console.log(topBottomBorder);
  console.log(empty);
  console.log(middle);
  console.log(empty);
  console.log(topBottomBorder);
}

function topBottom(len) {
  var border = '+';
  var i;

  for (i = 0; i < len; i += 1) {
    border += '-';
  }

  border += '+';

  return border;
}

function padding(len) {
  var padding = '|'

  for (i = 0; i < len; i += 1) {
    padding += ' ';
  }

  padding += '|';

  return padding;
}

//logInBox('To boldly go where no one has gone before.');
//logInBox('');


/*
Modify this function so it truncates the message if it doesn't fit inside a width that is provided as a second argument
(the width is the width of the box itself). You may assume no maximum if the second argument is omitted. For a real
challenge, try word wrapping messages that are too long to fit so they appear on multiple lines, but still within the
box.
*/

function logInBox2(msg, max) {
  var limit;
  var len;
  var topBottomBorder;
  var empty;
  var middle;

  if (max === undefined) {
    limit = msg.length;
  } else {
    limit = msg.length < max ? msg.length : max
  }

  len = limit + 2;
  topBottomBorder = topBottom(len);
  empty = padding(len);
  middle = getMiddle(msg, len);

  console.log(topBottomBorder);
  console.log(empty);
  console.log(middle);
  console.log(empty);
  console.log(topBottomBorder);
}

function getMiddle(msg, len) {
  var newMiddle = '| ';
  var words = msg.split(' ');
  var currentLen = 0;
  var i;
  var j;

  for (i = 0; i < words.length - 1; i += 1) {
    words[i] = words[i] + ' ';
  }

  for (i = 0; i < words.length; i += 1) {
    if (currentLen + words[i].length <= len - 2) {
      newMiddle += words[i];
      currentLen += words[i].length;
    } else {
      remaining = len - currentLen;
      newMiddle += trailingSpaces(len - currentLen);
      newMiddle += '|\n| ';
      newMiddle += words[i];
      currentLen = words[i].length;
    }
  }

  newMiddle += trailingSpaces(len - currentLen);
  newMiddle += '|';

  return newMiddle;
}

function trailingSpaces(len) {
  var empty = '';
  var i;

  for (i = 0; i < len - 1; i += 1) {
    empty += ' ';
  }

  return empty;
}

logInBox2('To boldly go where no one has gone before.', 100);
logInBox2('');
logInBox2('To boldly go where no one has gone before. To boldly go where no one has gone before. To boldly go where no one has gone before.', 100);
logInBox2('This is just a test to see if the word wrapping works as expectd. My function could be made easier to read but if it works, I will be proud of it!', 80);
logInBox2('To boldly go where no one has gone before.', 42);
logInBox2('To boldly go where no one has gone before.', 41);