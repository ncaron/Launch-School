/*
The processOrder function allows you to pass in price, quantity, discount, serviceCharge and tax as arguments. It's also
possible to omit those parameters when you call the function, and in that case, the function has to use default values:

function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5

This function uses conditionals to test whether arguments got passed. If an argument is not passed in, its value is
going to be undefined, in which case we'll assign it with a default value inside of the function.

You can also use the code below for the same purpose:

function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;
  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

Those two solutions, however, have a limitation that can lead to the wrong result for certain inputs.
Can you explain how?
*/

// The results will be wrong when one of the inputs is 0(falsey) because the right-hand side of the || will be default.