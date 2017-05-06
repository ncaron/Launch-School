/*
Exerise 1

Write a function named objectHasProperty that takes two arguments: an Object and a String. The function should return
true if the Object contains a property with the name given by the String, false otherwise.

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};
objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true
*/

function objectHasProperty(obj, str) {
  for (var prop in obj) {
    if (prop === str) {
      return true;
    }
  }

  return false;
}

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));
console.log(objectHasProperty(pets, 'lizard'));
console.log(objectHasProperty(pets, 'mice'));


/* -----------------------------------------------------*/


/*
Exerise 2

Write a function named incrementProperty that takes two arguments: an Object and a String. If the Object contains a
property with the specified name, the function should increment the value of that property. If the property does not
exist, the function should add a new property with a value of 1. The function should return the new value of the property.

var wins = {
  steve: 3,
  susie: 4,
};
incrementProperty(wins, 'susie');   // 5
wins;                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
wins;                               // { steve: 3, susie: 5, lucy: 1 }
*/

function incrementProperty(obj, str) {
  if (obj[str]) {
    obj[str] += 1;
  } else {
    obj[str] = 1;
  }

  return obj[str];
}

var wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));
console.log(wins);
console.log(incrementProperty(wins, 'lucy'));
console.log(wins);


/* -----------------------------------------------------*/


/*
Exerise 3

Write a function named copyProperties that takes two Objects as arguments. The function should copy all properties from
the first object to the second. The function should return the number of properties copied.

var hal = {
  model: 9000,
  enabled: true,
};
var sal = {};
copyProperties(hal, sal);  // 2
sal;                       // { model: 9000, enabled: true }
*/

function copyProperties(obj1, obj2) {
  for (var prop in obj1) {
    obj2[prop] = obj1[prop];
  }

  return Object.keys(obj1).length;
}

var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};
console.log(copyProperties(hal, sal));
console.log(sal);


/* -----------------------------------------------------*/


/*
Exerise 4

Write a function named wordCount that takes a single String as an argument. The function should return an Object that
contains the counts of each word that appears in the provided String. In the returned Object, you should use the words
as keys, and the counts as values.

wordCount('box car cat bag box');    // { box: 2, car: 1, cat: 1, bag: 1 }
*/

function wordCount(str) {
  var count = {};
  var words = str.split(' ');

  for (var i = 0; i < words.length; i++) {
    if (count[words[i]]) {
      count[words[i]] += 1;
    } else {
      count[words[i]] = 1;
    }
  }

  return count;
}

console.log(wordCount('box car cat bag box'));