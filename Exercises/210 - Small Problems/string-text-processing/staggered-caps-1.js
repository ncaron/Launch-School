/*
Write a function that takes a string as an argument, and returns a new string that contains the original value using a staggered capitalization scheme in which it capitalizaes every other character while the making the characters in between lowercased. Don't change characters that are not letters, but count it as characters when switching between upper and lowercase.

Example:

staggeredCase('I Love Launch School!')     // 'I LoVe lAuNcH ScHoOl!'
staggeredCase('ALL_CAPS')                  // 'AlL_CaPs'
staggeredCase('ignore 77 the 444 numbers') // 'IgNoRe 77 ThE 444 NuMbErS'
*/

function staggeredCase(str) {
  return str.split('').map(function(char, index) {
    if (index % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 444 numbers'));