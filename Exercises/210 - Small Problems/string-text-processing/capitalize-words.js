/*
Write a function that takes a single string argument and returns a new string that contains the original value of the argument with the first character of every word capitalized and all succeeding characters in lowercase.

You may assume that words are any sequence of non-blank characters.

Examples

wordCap('four score and seven')    // 'Four Score And Seven'
wordCap('the javaScript language') // 'The Javascript Language'
wordCap('this is a "quoted" word') // 'This Is A "quoted" Word'
*/

function wordCap(str) {
  return str.split(' ').map(function(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));