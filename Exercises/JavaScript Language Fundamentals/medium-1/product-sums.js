/*
The following program returns the product of the totals of two arrays of numbers. Review the code. Is it producing the
expected behavior? Why or why not?

function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  var sum;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  sum;
}
*/


// It will not have the expected behavior because total returns undefined. Unlike Ruby, the return statement is required
// in JavaScript to explicitely return a value otherwise it will return undefined.
// Another error in the total function is that sum is never defined to be a number.

function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  var sum;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  sum;
}