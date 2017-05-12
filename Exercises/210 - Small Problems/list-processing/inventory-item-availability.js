/*
Building on the previous exercise, write a function the returns whether an item is available. As before, the function takes in two arguments: inventoryItem and transactions. The function will return true only if the sum of the quantity for the transactions for the item is greater than zero. Notice that in the transaction object there is a movement property. Every time the movement value is out it decreases the quantity.

You may (and should) use the transactionsFor function from the previous exercise.

Example

var transactions = [ {id: 101, movement: 'in', quantity: 5, },
                     {id: 105, movement: 'in', quantity: 10, },
                     {id: 102, movement: 'out', quantity: 17, },
                     {id: 101, movement: 'in', quantity: 12, },
                     {id: 103, movement: 'out', quantity: 15, },
                     {id: 102, movement: 'out', quantity: 15, },
                     {id: 105, movement: 'in', quantity: 25, },
                     {id: 101, movement: 'out', quantity: 18, },
                     {id: 102, movement: 'in', quantity: 22, },
                     {id: 103, movement: 'out', quantity: 15, },];

isItemAvailable(101, transactions); // false
isItemAvailable(105, transactions); // true
*/

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(function(transaction) {
    return transaction.id === inventoryItem;
  });
}

function isItemAvailable(inventoryItem, transactions) {
  return transactionsFor(inventoryItem, transactions).reduce(function(sum, item) {
    if (item.movement === 'in') {
      return sum + item.quantity;
    } else {
      return sum - item.quantity;
    }
  }, 0) > 0;
}

var transactions = [ {id: 101, movement: 'in', quantity: 5, },
                     {id: 105, movement: 'in', quantity: 10, },
                     {id: 102, movement: 'out', quantity: 17, },
                     {id: 101, movement: 'in', quantity: 12, },
                     {id: 103, movement: 'out', quantity: 15, },
                     {id: 102, movement: 'out', quantity: 15, },
                     {id: 105, movement: 'in', quantity: 25, },
                     {id: 101, movement: 'out', quantity: 18, },
                     {id: 102, movement: 'in', quantity: 22, },
                     {id: 103, movement: 'out', quantity: 15, },];

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(105, transactions));