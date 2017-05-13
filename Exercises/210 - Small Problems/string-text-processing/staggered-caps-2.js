/*
Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters are still included in the return value; they just don't count when toggling the desired case.

Example:

staggeredCase('I Love Launch School!')     // 'I lOvE lAuNcH sChOoL!'
staggeredCase('ALL CAPS')                  // 'AlL cApS'
staggeredCase('ignore 77 the 444 numbers') // 'IgNoRe 77 ThE 444 nUmBeRs'
*/

function staggeredCase(str) {
  var current = 0;

  return str.split('').map(function(char) {
    if (char.match(/[a-z]/i)) {
      if (current % 2 === 0) {
        current += 1;
        return char.toUpperCase();
      } else {
        current += 1;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL CAPS'));
console.log(staggeredCase('ignore 77 the 444 numbers'));