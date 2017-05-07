/*
Write a function named myReduce that's similar to the Array.prototype.reduce method. It takes an array and a function as
arguments, and optionally, a third argument that serves as an initial value. If the caller omits the initial value,
myReduce should use the first element of the Array as the initial value. myReduce should return the value returned by
the last invocation of the callback function.

function myReduce(array, func, initial) {
}

var smallest = function(result, value) {
  return result <= value ? result : value;
};

var sum = function(result, value) {
  return result + value;
};

myReduce([5, 12, 15, 1, 6], smallest);           // 1
myReduce([5, 12, 15, 1, 6], sum, 10);            // 49
*/

function myReduce(array, func, initial) {
  var total;
  var i;

  if (typeof initial === 'undefined') {
    total = array[0];
    i = 1;
  } else {
    total = initial;
    i = 0;
  }

  array.slice(i).forEach(function(el) {
    total = func(total, el);
  });

  return total;
}

var smallest = function(result, value) {
  return result <= value ? result : value;
};

var sum = function(result, value) {
  return result + value;
};

console.log(myReduce([5, 12, 15, 1, 6], smallest));
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));


/*
Let's implement a function that takes a list of words as an argument and returns the word with the most characters:

function longestWord(words) {
  // ...
}

var longest = function(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
};

longestWord(['abc', 'launch', 'targets', '']);      // "targets"
*/

function longestWord(words) {
  return myReduce(words, longest);
}

var longest = function(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
};

console.log(longestWord(['abc', 'launch', 'targets', '']));