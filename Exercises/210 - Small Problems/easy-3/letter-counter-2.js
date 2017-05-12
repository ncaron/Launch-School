/*
Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the length of "it's" is 3, not 4.

Examples

wordSizes('Four score and seven.');                        // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');   // { "3": 5, "6": 3 }
wordSizes('What\'s up doc?');                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                             // {}
*/

function wordSizes(str) {
  var sizes = {};

  if (str.length === 0) {
    return sizes;
  }

  str.split(' ').forEach(function (word) {
    word = word.replace(/[^a-z]/ig, '');

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