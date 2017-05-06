/*
The function below takes an array as argument and returns its average. The user of the function put in the statements
below and was expecting the function to return 5 to test it. What is the value returned?

Example

var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;
function average(array) {
  var sum = 0;
  for (var i = -2; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);
*/

// 10

var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;
function average(array) {
  var sum = 0;
  for (var i = -2; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myArray));


/*
Rewrite the average function such that the user will get the expected result of 5.
*/

var myArray2 = [5, 5];
myArray2[-1] = 5;
myArray2[-2] = 5;
function average2(array) {
  var sum = 0;
  for (var i = -2; i < array.length; i++) {
    sum += array[i];
  }

  return sum / Object.keys(array).length;
}

console.log(average2(myArray2));