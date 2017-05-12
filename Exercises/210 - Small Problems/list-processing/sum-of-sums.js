/*
Write a function that takes an Array of numbers and then returns the sum of the sums of each leading subsequence for that Array. You may assume that the Array always contains at least one number.

Examples:

sumOfSums([3, 5, 2])       // (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
sumOfSums([1, 5, 7, 3])    // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
sumOfSums([4])             // 4
sumOfSums([1, 2, 3, 4, 5]) // 35
*/

function sumOfSums(arr) {
  var newArr = [];
  var sum = 0;
  

  arr.forEach(function(value) {
    sum += value;
    newArr.push(sum);
  });

  return newArr.reduce(function(total, current) {
    return total + current;
  });
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));