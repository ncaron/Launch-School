/*
Read through the sample code below. What gets logged by lines 11 and 12?

Example

var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);
*/

// LOG
// 678
// 456


var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);


/*
Here's another example. Can you tell and explain the values logged at lines 7 and 9?

var myObj = {};
myObj[myFunc()] = 'hello, ';
function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);
*/

// LOG
// {funcProp: 'hello, '}
// {funcProp: 'world!'}

var myObj = {};
myObj[myFunc()] = 'hello, ';
function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);