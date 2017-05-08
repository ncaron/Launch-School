/*
Write a function that takes a string as an argument and returns true if the string contains properly balanced
parentheses, false otherwise. Parentheses are properly balanced only when '(' and ')' occur in matching pairs, with each
pair starting with '('.

Examples:

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false
*/

function isBalanced(str) {
  var parens = 0;
  var i;

  for (i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      parens += 1;
    } else if (str[i] === ')') {
      parens -= 1;
    }

    if (parens < 0) {
      return false
    }
  }

  return parens === 0;
}

console.log(isBalanced('What (is) this?'));
console.log(isBalanced('What is) this?'));
console.log(isBalanced('What (is this?'));
console.log(isBalanced('((What) (is this))?'));
console.log(isBalanced('((What)) (is this))?'));
console.log(isBalanced('Hey!'));
console.log(isBalanced(')Hey!('));
console.log(isBalanced('What ((is))) up('));