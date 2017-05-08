/*
Write a function that generates and returns an acronym from a string of words. For example, the function should return
"PNG" for the string "Portable Network Graphics". Count compound words (words connected with a dash) as separate words.

function acronym(string) {
}

acronym('Portable Network Graphics');                 // "PNG"
acronym('First In, First Out');                       // "FIFO"
acronym('PHP: HyperText Preprocessor');               // "PHP"
acronym('Complementary metal-oxide semiconductor');   // "CMOS"
acronym('Hyper-text Markup Language');                // "HTML
*/

function acronym(string) {
  var words = string.split(/[- ]/);
  var firstLetters = words.map(function(word) {
    return word[0];
  });

  return firstLetters.join('').toUpperCase();
}

console.log(acronym('Portable Network Graphics'));
console.log(acronym('First In, First Out'));
console.log(acronym('PHP: HyperText Preprocessor'));
console.log(acronym('Complementary metal-oxide semiconductor'));
console.log(acronym('Hyper-text Markup Language'));