/*
Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a
String into a new String:

For each character in the original String:

If the character is a letter in the modern English alphabet, change it to the
character 13 positions later in the alphabet. So a becomes n. If you reach the
end of the alphabet, return to the beginning. So o becomes b.

Letter transformations preserve case. A becomes N while a becomes n.

Don't modify characters that are not letters.

Write a Function, rot13, that takes a String and returns that String transformed
by the rot13 cipher.

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

It's worth noting that rot13 applied twice results in the original string:

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
Teachers open the door, but you must enter by yourself.

This happens since there are 26 characters in the modern English alphabet: 2 sets of 13.
*/


/**
*** Uppercase Bounds = 65('A') to 90('Z')
*** Lowercase Bounds = 97('a') to 122('z')
**/

function rot13(string) {
  var uppercaseBounds = [65, 90];
  var lowercaseBounds = [97, 122];
  var rotated = '';
  var asciiNum;

  for (var i = 0; i < string.length; i++) {
    asciiNum = string.charCodeAt(i);

    if (asciiNum >= uppercaseBounds[0] && asciiNum <= uppercaseBounds[1]) {
      asciiNum += 13;

      if (asciiNum > uppercaseBounds[1]) {
        asciiNum = uppercaseBounds[0] + (asciiNum % uppercaseBounds[1]) - 1;
      }
    } else if (asciiNum >= lowercaseBounds[0] && asciiNum <= lowercaseBounds[1]) {
      asciiNum += 13;

      if (asciiNum > lowercaseBounds[1]) {
        asciiNum = lowercaseBounds[0] + (asciiNum % lowercaseBounds[1]) - 1;
      }
    }

    rotated += String.fromCharCode(asciiNum);
  }

  return rotated;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));