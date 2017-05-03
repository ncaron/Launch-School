// 1. We need a piece of reusable code that returns the average of three numbers. Define a function named average that
//    takes three parameters, a, b, and c, and returns their average. Call the function with three numbers and log the
//    result.
function average1(a, b, c) {
  return (a + b + c) / 3;
}

console.log(average1(6, 7, 8));

// 2. We now need a function that calculates the sum of the same three values. Create a function named sum that takes
//    the same three arguments as average, and returns the sum of the three arguments. Now modify average to call the
//    sum function with those three arguments and use the return value to calculate the average.
function average2(a, b, c) {
  return sum1(a, b, c) / 3;
}

function sum1(a, b, c) {
  return a + b + c;
}

console.log(average2(6, 7, 8));

// 3. Suppose we have a different number of values from which to calculate an average. Our current average function only
//    takes three numbers; we might need to write additional functions if we want to work with different numbers of data
//    points. A better solution, though, is to change the function to accept an array of arbitrary length. We can
//    calculate the average by looping over the array elements to calculate the total, then divide by the array length.
//
//    Create a variable named total with an initial value of 0 at the start of the average function. Use a for loop to
//    iterate over all the elements in the array. With each iteration, add the element's value to the total. When the
//    loop finishes, return the total divided by the array's length. Call average with an array of five numbers and log 
//    the result.
function average3(arr) {
  var total = 0;

  for (var i = 0, length = arr.length; i < length; i++) {
    total += arr[i];
  }

  return total / length;
}

console.log(average3([1, 2, 3, 4, 5]));

// 4. We should make the same changes to the sum function so we can continue to use it from the average function. Since
//    we've already written that functionality in average, we can just move it from there to sum. Move everything from
//    average into sum, except for the final return statement. The sum function should return the total, and average
//    should call the sum function with the same values, then divide the return value by the array length, and return it.
//
//    As before, call average with an array of five numbers and log the result.
function average4(arr) {
  return sum2(arr) / arr.length;
}

function sum2(arr) {
  var total = 0;

  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

console.log(average4([1, 2, 3, 4, 5]));

// 5. With this refactor, we can now use our functions to determine the average of all the numbers in an arbitrary array
//    of numbers. Create an array named temperatures and store five temperature values in it. Find the average
//    temperature by passing the array to the average function and log the result.
var temperatures = [20, 15, 16, 18, 24];
console.log(average4(temperatures));