/*
Exercise 1

Write a method that returns true if its argument looks like a URL, false if it does not.

isUrl('http://launchschool.com');   // -> true
isUrl('https://example.com');       // -> true
isUrl('https://example.com hello'); // -> false
isUrl('   https://example.com');    // -> false
*/

function isUrl(text) {
  return !!text.match(/^\bhttps?:\/\/\S+$\b/);
}

console.log(isUrl('http://launchschool.com'));
console.log(isUrl('https://example.com'));
console.log(isUrl('https://example.com hello'));
console.log(isUrl('   https://example.com'));


/* -----------------------------------------------------*/


/*
Exercise 2

Write a method that returns all of the fields in a haphazardly formatted string. The fields are separated by a variety
of spaces, tabs, and commas, with possibly multiple occurrences of these characters.

fields("Pete,201,Student");
// -> ['Pete', '201', 'Student']

fields("Pete \t 201    ,  TA");
// -> ['Pete', '201', 'TA']

fields("Pete \t 201");
// -> ['Pete', '201']
*/

function fields(text) {
  return text.split(/[\t, ]+/);
}

console.log(fields("Pete,201,Student"));
console.log(fields("Pete \t 201    ,  TA"));
console.log(fields("Pete \t 201"));


/* -----------------------------------------------------*/


/*
Exercise 3

Write a method that changes the first arithmetic operator (+, -, *, /) in a string to a '?' and returns the resulting
string. The original string should not be modified.

mysteryMath('4 + 3 - 5 = 2');
// -> '4 ? 3 - 5 = 2'

mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// -> '(4 ? 3 + 2) / 7 - 1 = 1'
*/

function mysteryMath(text) {
  return text.replace(/[+\-*\/]/, '?');
}

console.log(mysteryMath('4 + 3 - 5 = 2'));
console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));


/* -----------------------------------------------------*/


/*
Exercise 4

Write a method that changes every arithmetic operator (+, -, *, /) to a '?' and returns the resulting string. The
original string should not be modified.

mysteriousMath('4 + 3 - 5 = 2');           // -> '4 ? 3 ? 5 = 2'
mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'
*/

function mysteriousMath(text) {
  return text.replace(/[+\-*\/]/g, '?');
}

console.log(mysteriousMath('4 + 3 - 5 = 2'));
console.log(mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'));


/* -----------------------------------------------------*/

/*
Exercise 5

Write a method that changes the first occurrence of the word apple, blueberry, or cherry in a string to danish.

danish('An apple a day keeps the doctor away');
// -> 'An danish a day keeps the doctor away'

danish('My favorite is blueberry pie');
// -> 'My favorite is danish pie'

danish('The cherry of my eye');
// -> 'The danish of my eye'

danish('apple. cherry. blueberry.');
// -> 'danish. cherry. blueberry.'

danish('I love pineapple');
// -> 'I love pineapple'
*/

function danish(text) {
  return text.replace(/\b(apple|blueberry|cherry)\b/, 'danish');
}

console.log(danish('An apple a day keeps the doctor away'));
console.log(danish('My favorite is blueberry pie'));
console.log(danish('The cherry of my eye'));
console.log(danish('apple. cherry. blueberry.'));
console.log(danish('I love pineapple'));


/* -----------------------------------------------------*/


/*
Exercise 6

Challenge: write a method that changes dates in the format 2016-06-17 to the format 17.06.2016. You must use a regular
expression and should only use methods described in this section.

formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2016/06/17'); // -> '2016/06/17' (no change)
*/

function formatDate(text) {
  return text.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1');
}

console.log(formatDate('2016-06-17'));
console.log(formatDate('2016/06/17'));


/* -----------------------------------------------------*/


/*
Exercise 7
Challenge: write a method that changes dates in the format 2016-06-17 or 2016/06/17 to the format 17.06.2016. You must
use a regular expression and should only use methods described in this section.

format_date('2016-06-17'); // -> '17.06.2016'
format_date('2017/05/03'); // -> '03.05.2017'
format_date('2015/01-31'); // -> '2015/01-31' (no change)
*/

function format_date(text) {
  return text.replace(/^(\d{4})[-\/](\d{2})[-\/](\d{2})$/, '$3.$2.$1');
}

console.log(format_date('2016-06-17'));
console.log(format_date('2017/05/03'));
console.log(format_date('2015/01-31'));