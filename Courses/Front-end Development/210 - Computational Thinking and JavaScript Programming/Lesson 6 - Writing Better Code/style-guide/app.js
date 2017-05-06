/*
Identify the code that violates the Airbnb JavaScript style guide, and update the code to fix the issues you identify.
There may be more than one issue in each code snippet.
*/

// 1
var title = "The Three-Body Problem";

// Single quotes should be used.

var title = 'The Three-Body Problem';


/* -----------------------------------------------------*/


// 2
var title = 'The Three-Body Problem',
    author = 'Cixin Liu',
    page_count = 400;

// Should use var for each declaration.
// Variables should be camelCase.

var title = 'The Three-Body Problem';
var author = 'Cixin Liu';
var pageCount = 400;


/* -----------------------------------------------------*/


// 3
var completed = lastPageRead == 400;

// Strict equality (===) should be used.

var completed = lastPageRead === 400;


/* -----------------------------------------------------*/


// 4
if (finishedBook())
  console.log('You have finished reading this book');

// Brackets should always be used on multi-line.

if (finishedBook()) {
  console.log('You have finished reading this book');
}


/* -----------------------------------------------------*/


// 5
function read(pages) {
      console.log('You started reading.');
      for (var i=0; i<pages; i++) {
              var message = 'You read page '+i;
              console.log(message);
      }
}

read(400);

// Indentations should be 2 spaces.
// There should be a space between each operators.
// Variables should be declared outside of the loop.
// i should be converted to a string.
// Should not use ++.

function read(pages) {
  var message;
  var i;

  console.log('You started reading.');
  for (i = 0; i < pages; i += 1) {
    message = 'You read page '+ i;
    console.log(message);
  }
}

read(400);