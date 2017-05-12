/*
Write a function that takes a string with one or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any string of characters that do not include a space.

Examples

wordSizes('Four score and seven.');                       // { "3": 1, "4" : "1", "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes('What\'s up doc?');                             // { "6": 1, "2": 1, "4": 1 }
wordSizes('');
*/

function wordSizes(str) {
  var sizes = {};

  if (str.length === 0) {
    return sizes;
  }

  str.split(' ').forEach(function (word) {
    if (sizes[word.length] === undefined) {
      sizes[word.length] = 1;
    } else {
      sizes[word.length] += 1;
    }
  });

  return sizes
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes('What\'s up doc?'));
console.log(wordSizes(''));