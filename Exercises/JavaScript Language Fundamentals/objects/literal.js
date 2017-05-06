/*
Read the code and identify the bug in it. Think about it first before running it.

Example

var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd'
};
myObject[1];
myObject[a];
myObject.a;
*/

// Reference error occurs because in 'myObject[a]', 'a' is not a string, it looks up the variable 'a' which doesn't exist.

var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd'
};
myObject[1];
myObject[a];
myObject.a;