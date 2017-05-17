/*
Implement encoding and decoding for the rail fence cipher.

The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was
already used by the ancient Greeks.

In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up
when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

For example, using three "rails" and the message
"WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

W...E...C...R...L...T...E
.E.R.D.S.O.E.E.F.E.A.O.C.
..A...I...V...D...E...N..

Then reads off:
WECRLTEERDSOEEFEAOCAIVDEN

To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.

?...?...?...?...?...?...?
.?.?.?.?.?.?.?.?.?.?.?.?.
..?...?...?...?...?...?..
The first row has seven spots that can be filled with "WECRLTE".

W...E...C...R...L...T...E
.?.?.?.?.?.?.?.?.?.?.?.?.
..?...?...?...?...?...?..
Now the 2nd row takes "ERDSOEEFEAOC".

W...E...C...R...L...T...E
.E.R.D.S.O.E.E.F.E.A.O.C.
..?...?...?...?...?...?..
Leaving "AIVDEN" for the last row.

W...E...C...R...L...T...E
.E.R.D.S.O.E.E.F.E.A.O.C.
..A...I...V...D...E...N..
If you now read along the zig-zag shape you can read the original message.

*/

function encode(message, numRails) {
  message = message.toUpperCase().replace(/ /g, '').split('');

  if (numRails < 1) {
    return 'ERROR: Invalid number of rails!'
  } else if (numRails === 1 || numRails >= message.length) {
    return message.join('');
  }

  var rails = getEmptyRails(numRails);
  var down = true;
  var i = 0;

  while (message.length > 0) {
    if (i === 0) {
      down = true;
    } else if (i === numRails - 1) {
      down = false;
    }

    rails[i].push(message.shift());

    if (down) {
      i += 1;
    } else {
      i -= 1;
    }
  }

  return getEncodedString(rails);
}

function getEmptyRails(numRails) {
  var rails = [];
  var i;

  for (i = 0; i < numRails; i += 1) {
    rails.push([]);
  }

  return rails;
}

function getEncodedString(rails) {
  return rails.map(function(rail) {
    return rail.join('');
  }).join('')
}

var message1 = 'We are discovered flee at once';
var answer1 = 'WECRLTEERDSOEEFEAOCAIVDEN';
var encoded1 = encode(message1, 3);
console.log(encoded1);
console.log(answer1);
console.log(encoded1 === answer1);

/*
W...E...C...R...L...T...E
.E.R.D.S.O.E.E.F.E.A.O.C.
..A...I...V...D...E...N..
*/


var message2 = 'Hi everyone';
var answer2 = 'HEEYNIVROE';
var encoded2 = encode(message2, 2);
console.log(encoded2);
console.log(answer2);
console.log(encoded2 === answer2);

/*
H.E.E.Y.N.
.I.V.R.O.E
*/


var message3 = 'Hello World';
var answer3 = 'HLERDLOLWO';
var encoded3 = encode(message3, 5);
console.log(encoded3);
console.log(answer3);
console.log(encoded3 === answer3);

/*
H.......L.
.E.....R.D
..L...O...
...L.W....
....O.....
*/


var message4 = 'My name is Niko';
var answer4 = 'MYNAMEISNIKO';
var encoded4 = encode(message4, 1);
console.log(encoded4);
console.log(answer4);
console.log(encoded4 === answer4);

/*
MYNAMEISNIKO
*/


var message5 = 'This is an error';
var answer5 = 'ERROR: Invalid number of rails!';
var encoded5 = encode(message5, 0);
console.log(encoded5);
console.log(answer5);
console.log(encoded5 === answer5);

/*
ERROR: Invalid number of rails!
*/

var message6 = 'This is a longer sentence with a small number of rails';
var answer6 = 'TIIAOGRETNEIHSALUBRFALHSSLNESNECWTAMLNMEORIS';
var encoded6 = encode(message6, 2);
console.log(encoded6);
console.log(answer6);
console.log(encoded6 === answer6);

/*
T.I.I.A.O.G.R.E.T.N.E.I.H.S.A.L.U.B.R.F.A.L.
.H.S.S.L.N.E.S.N.E.C.W.T.A.M.L.N.M.E.O.R.I.S
*/


var message7 = 'Hello'
var answer7 = 'HELLO';
var encoded7 = encode(message7, 5);
console.log(encoded7);
console.log(answer7);
console.log(encoded7 === answer7);

/*
H....
.E...
..L..
...L.
....O
*/


var message8 = 'Hey'
var answer8 = 'HEY';
var encoded8 = encode(message8, 10);
console.log(encoded8);
console.log(answer8);
console.log(encoded8 === answer8);

/*
H..
.E.
..Y
...
...
...
...
...
...
...
*/