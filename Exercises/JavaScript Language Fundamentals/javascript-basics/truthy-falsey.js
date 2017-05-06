/*
Go over the program. What does it log to the console at lines 7, 11, 15, and 19? Is it what you expected?
Why or why not?

var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}
*/

// LOGS
// Hello
// World
// !

// myBoolean is true so the first if logs 'Hello'.
// myString is truthy so !myString is false, it does not log 'World'.
// myArray is truthy, even if empty, !!myArray gets the boolean value for it, logging 'World'.
// myOtherString is falsey but since myArray is truthy, the if block executes and logs '!.

var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}