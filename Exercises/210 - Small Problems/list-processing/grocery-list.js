/*
Write a function which takes a grocery list (array) of fruits with quantities and converts it into an array of the correct number of each fruit.

Example:

buyFruit([['apples', 3], ['orange', 1], ['bananas', 2]]);
// result
['apples', 'apples', 'apples', 'orange', 'bananas','bananas']
*/

function buyFruit(list) {
  var wordList = [];

  list.forEach(function(item) {
    var name = item[0];
    var quantity = item[1];
    var i;

    for (i = 0; i < quantity; i += 1) {
      wordList.push(name);
    }
  });

  return wordList;
}

console.log(buyFruit([['apples', 3], ['orange', 1], ['bananas', 2]]));