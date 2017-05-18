/*
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to just those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word as a string, and returns true if it can spell the argument passed in from the set of blocks, false otherwise. You can consider the letters to be case insensitive when you apply the rules.

Examples:

isBlockWord('BATCH'); // true
isBlockWord('BUTCH'); // false
isBlockWord('jest');  // true
*/


/*
- Parameters
  - String
    - The string to be tested, a single word.

- Edge
  - Empty string
  - Wrong type

- Return
  - Boolean
    - True if the word can be made using the blocks.
    - False otherwise.

- Data Structure
  - An array to hold combinations of blocks

- Algorithm
  - Create blocks combination array.
  - Transform the word to uppercase.
  - Loop through the word.
    - Find the index of the block in the blocks array.
      - Filter the blocks by selecting only the block with the current letter in it (blocks.indexOf(letter) === -1).
      - Get the index of this block in the array of blocks.
    - If the block index === -1:
      - Return false.
    - Else:
      - Splice it from the array.
  - Return true if the loop completes.
*/

function isBlockWord(word) {
  if (typeof word !== 'string' || word === '') {
    return false;
  }

  var blocks = [
    'BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'
  ];
  word = word.toUpperCase();
  var block;
  var blockIndex;
  var i;

  for (i = 0; i < word.length; i += 1) {
    block = blocks.filter(function(block) {
      return block.indexOf(word[i]) !== -1;
    }).join('');

    blockIndex = blocks.indexOf(block);

    if (blockIndex === -1) {
      return false;
    } else {
      blocks.splice(blockIndex, 1);
    }
  }

  return true;
}


// Test Cases
console.log(isBlockWord('BATCH'));   // true
console.log(isBlockWord('BUTCH'));   // false
console.log(isBlockWord('jest'));    // true
console.log(isBlockWord('floW'));    // true
console.log(isBlockWord('APPLE'));   // false
console.log(isBlockWord('apple'));   // false
console.log(isBlockWord('apPLE'));   // false
console.log(isBlockWord('Box'));     // false
console.log(isBlockWord('BUTCH!'));  // false
console.log(isBlockWord(''));        // false
console.log(isBlockWord(42));        // false