/*
Write a function that takes a non-empty string argument, and returns the middle character or characters of the argument. If the argument has an odd length, you should return exactly one character. If the argument has an even length, you should return exactly two characters.

Examples:

centerOf('I love ruby')    // 'e'
centerOf('Launch School')  // ' '
centerOf('Launch')         // 'un'
centerOf('Launchschool')   // 'hs'
centerOf('x')              // 'x'
*/

function centerOf(str) {
  var center = Math.floor(str.length / 2);

  if (str.length % 2 === 1) {
    return str.substr(center, 1);
  } else {
    center -= 1;
    return str.substr(center, 2);
  }
}

console.log(centerOf('I love ruby'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));