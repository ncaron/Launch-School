/*
Write a function that takes a sentence string as input and returns a new string that contains the original string with any sequence of the words 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' converted to a string of digits.

Example:

wordToDigit('Please call me at five five five one two three four. Thanks.');
//'Please call me at 5 5 5 1 2 3 4. Thanks.'
*/

// Create an array of strings in numerical order.
// Split the string at each space for an array of words.
// Map the words array and replace number strings with index of the array.

var DIGITS = [
  'zero', 'one', 'two', 'three', 'four', 'five',
  'six', 'seven', 'eight', 'nine', 'ten'
];

function wordToDigit(str) {
  return str.split(' ').map(function(word) {
    var punc = word.replace(/[^!?.-]+/ig, '');
    var noPunc = word.replace(/[!?.-]+$/ig, '');
    var index = DIGITS.indexOf(noPunc.toLowerCase());

    return index < 0 ? word : String(index) + punc;
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));