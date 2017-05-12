/*
Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as it does backwards. Arrange the return values in the same sequence as the substrings appear in the string. Include duplicate palindromes multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purposes of this exercise, you should consider all characters and pay attention to case; that is, "AbcbA" is a palindrome, but neither "Abcba" nor "Abc-bA" are. In addition, assume that single characters are not palindromes.

Examples:

palindromes('abcd');  // []
palindromes('madam'); // ['madam', 'ada']
palindromes('hello-madam-did-madam-goodbye');
// result
[ 'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  '-madam-', 'madam', 'ada', 'oo' ]

palindromes('knitting cassettes');
// result
[ 'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt' ]
*/

function substringsAtStart(str) {
  var subs = [];
  var i;

  for (i = 0; i < str.length; i += 1) {
    subs.push(str.substr(0, i + 1));
  }

  return subs;
}

function substrings(str) {
  var allSubs = [];
  var i;

  for (i = 0; i < str.length; i += 1) {
    allSubs.push(substringsAtStart(str.substring(i)));
  }

  return allSubs.reduce(function(result, arr) {
    return result.concat(arr);
  });
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function palindromes(str) {
  return substrings(str).filter(function(sub) {
    return sub.length > 1 && isPalindrome(sub);
  });
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));