/*
Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];
countOccurrences(vehicles);

// console output
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/

function countOccurrences(arr) {
  var vehicles = {};
  var i;

  for (i = 0; i < arr.length; i += 1) {
    if (vehicles[arr[i]] === undefined) {
      vehicles[arr[i]] = 0;
    }

    vehicles[arr[i]] += 1;
  }

  var type;
  
  for (type in vehicles) {
    console.log(type + ' => ' + vehicles[type]);
  }
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];
countOccurrences(vehicles);