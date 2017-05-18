/*
Implement the caesar cipher. The caesar cipher is one of the earliest and simplest ways to encrypt plaintext so that passing or communicating a message can be made secure. It is a substitution type of cipher, wherein the characters in a plaintext are substituted by a letter some fixed number of positions in the alphabet. For example the letter A can be right shifted 3 and it will be substituted with the letter D. This shift value is often referred to as the key. If a person has this key value then they can decode the "encrypted plaintext" or ciphertext.

As one of the earlier ciphers, it only encrypts lower and upper cased letters of the alphabet. Any other character is left as is. Likewise, the substituted letters are only taken from the corresponding letter case. In the event that the key value for shifting exceeds the alphabet capacity, it wraps around.

Examples:

// Simple shift
caesarEncrypt('A', 0);       // 'A'
caesarEncrypt('A', 3);       // 'D'

// Wrap around
caesarEncrypt('y', 5);       // 'd'
caesarEncrypt('a', 47);      // 'v'

// All letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// ZABCDEFGHIJKLMNOPQRSTUVWXY

caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!

// Many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?
*/


/*
- Parameters
  - String
    - The text to be encrypted.
  - Integer
    - The encryption key.

- Edge
  - Empty String

- Return
  - String
    - The encrypted text.

- Algorithm
  - Create a string of all lowercases
  - Create a string of all uppercases
  - Split the string at each character.
  - Map each character:
    - Check if uppercase or lowercase.
    - Find the index of the new character in appropriate string (lowercases or uppercases).
      - (Index of current char in uppercase or lowercase string + key) % 26.
    - Replace it or keep it the same (if not a letter).
  - Join the array into a string and return it.
*/

function caesarEncrypt(str, key) {
  var lowercases = 'abcdefghijklmnopqrstuvwxyz';
  var uppercases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return str.split('').map(function(char) {
    if (/[a-z]/.test(char)) {
      return getChar(lowercases, char, key);
    } else if (/[A-Z]/.test(char)) {
      return getChar(uppercases, char, key);
    } else {
      return char;
    }
  }).join('');
}

function getChar(lettercase, char, key) {
  return lettercase[(lettercase.indexOf(char) + key) % 26];
}

// Test Cases

console.log(caesarEncrypt('A', 0));
// 'A'

console.log(caesarEncrypt('A', 3));
// 'D'

console.log(caesarEncrypt('y', 5));
// 'd'

console.log(caesarEncrypt('a', 47));
// 'v'

console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// ZABCDEFGHIJKLMNOPQRSTUVWXY

console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!

console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?

console.log(caesarEncrypt('', 5));
// 