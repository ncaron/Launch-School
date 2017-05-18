/*
The vigenere cipher encrypts alphabetic text by way of polyalphabetic substitution. It uses a series of caesar ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter B corresponds to a shift value of 1 and the letter d a shift value 3. In essence, the shift value used for the letters of the alphabet is its index value. This means that the letter a-z would be equivalent to numbers 0-25; likewise A-Z would be 0-25.

Applying the vigenere cipher is done sequentially for each character by applying the current shift value to a caesar cipher for that particular character. To make this more concrete lets take the example of the following:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the vigenere cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice from the example that the key is not moved forward if the character is not in the alphabet. Like, the caesar cipher it only encrypts alphabet characters.

The objective for this exercise to implement the vigenere cipher. Take note that the case does not matter for the key (i.e 'MEat' === 'mEaT'), the resulting encryption won't change depending on the case of the letters.
*/


/*
- Parameters
  - String
    - The text to be encrypted.
  - String
    - The encryption key.

- Edge
  - Empty String

- Return
  - String
    - The encrypted string.

- Algorithm
  - Create a string of all letters.
  - Convert the key to all lowercases.
  - Split the string at each character.
  - Loop while building encrypted string:
    - Check if it's a letter.
    - If it's a letter, encrypt it, add to new string and increment the key index.
    - When the key index is key.length, reset it back to 0.
  - Return the encrypted string.
*/

function vigenereEncrypt(str, key) {
  if (key === '') {
    return str;
  }

  var letters = 'abcdefghijklmnopqrstuvwxyz';
  key = key.toLowerCase();
  var encrypted = '';
  var encryptedChar = '';
  var keyIndex = 0;
  var i;

  for (i = 0; i < str.length; i += 1) {
    if (/[a-z]/i.test(str[i])) {
      encryptedChar = getChar(letters, str[i], key[keyIndex]);
      encrypted += /[a-z]/.test(str[i]) ? encryptedChar : encryptedChar.toUpperCase();
      keyIndex += 1;
    } else {
      encrypted += str[i];
    }

    if (keyIndex === key.length) {
      keyIndex = 0;
    }
  }

  return encrypted;
}

function getChar(letters, char, key) {
  return letters[(letters.indexOf(char.toLowerCase()) + letters.indexOf(key)) % 26];
}


// Test Cases

console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'meat'));
// Bmnxmtpeqw dhz'x gh ar pbldal!

console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'mEaT'));
// Bmnxmtpeqw dhz'x gh ar pbldal!

console.log(vigenereEncrypt('', 'nothing'));
// 

console.log(vigenereEncrypt('Nothing', ''));
// Nothing

console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'A'));
// Pineapples don't go on pizzas!

console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'Aa'));
// Pineapples don't go on pizzas!

console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'cab'));
// Riogaqrlfu dpp't hq oo riabat!

console.log(vigenereEncrypt('Dog', 'Rabbit'));
// Uoh