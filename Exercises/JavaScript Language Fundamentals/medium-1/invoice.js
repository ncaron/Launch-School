/*
We have a function that can compute the amount total for an invoice with four line items. How can you refactor the
function so that it'll work with invoices with any number of line items?

function invoiceTotal(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

invoiceTotal(20, 30, 40, 50);             // works
invoiceTotal(20, 30, 40, 50, 40, 40);     // doesn't work; how can you make it work?
*/

function invoiceTotal(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

console.log(invoiceTotal(20, 30, 40, 50));
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));

// When the number paramaters a function takes is not know, it's a good idea to use the arguments object and loop it.

function invoiceTotal1() {
  var total = 0;
  var i;

  for (i = 0; i < arguments.length; i += 1) {
    total += arguments[i];
  }

  return total;
}

console.log(invoiceTotal1(20, 30, 40, 50));
console.log(invoiceTotal1(20, 30, 40, 50, 40, 40));