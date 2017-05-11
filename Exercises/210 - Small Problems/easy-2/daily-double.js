/*
Write a function that takes a string argument and returns a new string that contains the value of the original string
with all consecutive duplicate characters collapsed into a single character.

Examples:

crunch('ddaaiillyy ddoouubbllee');        // 'daily double'
crunch('4444abcabccba');                  // '4abcabcba'
crunch('ggggggggggggggg');                // 'g'
crunch('a');                              // 'a'
crunch('');                               // ''
*/

function crunch(str) {
  var crunched = '';
  var i;

  for (i = 0; i < str.length; i += 1) {
    if (str[i] !== str[i + 1]) {
      crunched += str[i];
    }
  }

  return crunched;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));