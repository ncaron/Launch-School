/*
Write a function that's similar to Array.prototype.filter. It takes an array and a function as arguments and returns an
array whose values are only those that the function passed returns as true.

function myFilter(array, func) {
  // ..
}

var isPythagoreanTriple = function(triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

myFilter([{a: 3, b: 4, c: 5}, {a: 5, b: 12, c: 13},
          {a: 1, b: 2, c: 3}], isPythagoreanTriple);
// returns [{a: 3, b: 4, c: 5}, {a: 5, b: 12, c: 13}]
*/

function myFilter(array, func) {
  var filtered = [];

  array.forEach(function(value) {
    if (func(value)) {
      filtered.push(value);
    }
  });
  
  return filtered;
}

var isPythagoreanTriple = function(triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

console.log(myFilter([{a: 3, b: 4, c: 5}, {a: 5, b: 12, c: 13}, {a: 1, b: 2, c: 3}], isPythagoreanTriple));


/*
Let's build a program that filters out numbers that are not a multiple of either 3 or 5 from an array of integers and
returns it.

function multiplesOfThreeOrFive(values) {
  // ...
}

var isMultipleOfThreeOrFive = function(value) {
  return value % 5 === 0 || value % 3 === 0;
};

multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]);    // [ 3, 5, 18, 15 ]
*/

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

var isMultipleOfThreeOrFive = function(value) {
  return value % 5 === 0 || value % 3 === 0;
};

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));