/*
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to just those words that do not use both letters from any given
block. You can also only use each block once.

Write a function that takes a word as a string, and returns true if it can spell the argument passed in from the set of
blocks, false otherwise. You can consider the letters to be case insensitive when you apply the rules.

Examples:

isBlockWord('BATCH'); // true
isBlockWord('BUTCH'); // false
isBlockWord('jest');  // true
*/

/*
- INPUT
  - A string of characters.

- Check if block can spell the string passed in.
  - Each block contains 2 letters
  - If a letter is used, it cannot be used again and the letter on the other side cannot be used also.

- RETURN
  - true if string can be spelled using the blocks.
  - false if it cannot.

- ALGORITHM
  - Create an array with all combinations of letters.
  - Change string passed in to uppercase.
  - loop through the string
    - check if the letter appears in the array of available blocks
      - remove the block if it does
      - return false if it doesn't
    - return true if loop completes without returning false.
*/

function isBlockWord(string) {
  var blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  string = string.toUpperCase().split('');
  var match;
  var i;

  for (i = 0; i < string.length; i += 1) {
    match = blocks.filter(function(block) {
        return block.indexOf(string[i]) > -1;
      });

    if (match.length === 0) {
      return false;
    } else {
      blocks.splice(blocks.indexOf(match[0]), 1);
    }
  }

  return true;
}

// TEST CASES
console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('jest'));  // true
console.log(isBlockWord('floW'));  // true
console.log(isBlockWord('APPLE')); // false
console.log(isBlockWord('apple')); // false
console.log(isBlockWord('apPLE')); // false
console.log(isBlockWord('Box'));   // false