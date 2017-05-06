/*
The oddities function returns an Array that contains every other element of an Array that passed as an argument. The
values in the returned list are those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.
Below is a sample run of the program that uses the output as part of a comparison. Can you explain the results of the
comparison?

Examples:

function oddities(array) {
  var oddElements = [];
  for (var i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }
  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6]   // false
oddities(['abc', 'def']) === ['def']      // false
*/

// It returns false because they are not the same objects, the function created a new one.