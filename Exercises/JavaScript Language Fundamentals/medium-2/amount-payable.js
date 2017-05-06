/*
What does the code below log? Why is this so?

var startingBalance = 1;
var chicken = 5;
var chickenQuantity = 7;

var totalPayable = function(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));
*/

// LOG
// 40
// 45

// The values of the startingBalance in the global scope has changed.