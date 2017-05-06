/*
The doubler function takes two arguments: a number that it's going to double and return, and a string that indicates the
caller of the function. For example:

function doubler(number, caller) {
  console.log('This function was called by ' + caller + '.');
  return number + number;
}

doubler(5, 'Victor');       // 10
// This function was called by Victor.

Can you create a makeDoubler function, which returns a function that's functionally equivalent to doubler, but with the
caller preset?

var doubler = makeDoubler('Victor');
doubler(5);                 // 10
// This function was called by Victor.
*/

function makeDoubler(caller) {
  return function(number) {
    console.log('This function was called by ' + caller + '.');

    return number + number;
  };
}

var doubler = makeDoubler('Victor');
doubler(5);