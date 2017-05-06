/*
Read the code below and determine what the output is. You may need to look up the ASCII Table for character values.

function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne() {
    var result = '';
    for (var i = 0; i < arguments.length; i++) {
      result += String.fromCharCode(arguments[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101, 32));
    anotherOne(116, 111, 32);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101, 32);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);
*/

// 'one' will execute and in it, execute anotherAnotherOne which will log 'Welcome '
// Still inside 'one', 'anotherOne(116, 104, 101, 32)' will execute, logging 'to '
// 'one' returns the function 'anotherOne()' which is immediately called with arguments '(77, 97, 116, 114, 105, 120, 33)'
// which will log 'Matrix!'

// LOG
// Welcome 
// to 
// the
// Matrix!

function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne() {
    var result = '';
    for (var i = 0; i < arguments.length; i++) {
      result += String.fromCharCode(arguments[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101, 32));
    anotherOne(116, 111, 32);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101, 32);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);