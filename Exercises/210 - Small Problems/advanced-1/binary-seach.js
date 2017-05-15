/*
One of the common things done with data is searching it. Imagine that you have a yellow pages and you were searching for a particular business. A straightforward search would be to scroll through the yellow pages one page at a time and check if the business name you're looking for is in it. Its simple and easy to do however, at the worst case, it could mean going over through the end of yellow pages if the business name, for instance, began with a letter z. While, it is simple, it is not efficient.

An alternative to this "linear search", is a binary search algorithm. The basic idea of this algorithm is to cut the search area in half at every iteration by discarding the half that the value searched for does not exist in. The binary search algorithm does this by relying on the data being "sorted". Going back to the yellow pages, example. Lets say that we're looking for "Pizzeria".

Example:

//Yellow pages list of businesses data:
var yellowPages = ['Apple Store', 'Bags Galor', 'Bike Store',
  'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta place',
  'Pizzeria', 'Ruby Lounge', 'Zooper'];

With a linear search, we will go through each of the items in turn until the search item, Pizzeria is found. In a binary search, the following sequence will happen:

Get to the half of the data (assume truncation) --> Eat a Lot

If the value at the half is equal to Pizzeria stop the search.

If the value at the half is less than Pizzeria:

  Discard the lower half including the value at the half --> ['Apple Store', 'Bags Galor', 'Bike Store', 'Donuts R Us', 'Eat a Lot']

  Repeat the process from the top, using the upper half --> ['Good Food', 'Pasta place', 'Pizzeria', 'Ruby Lounge', 'Zooper']

If the value at the half is greater than Pizzeria, do the same as previous but reverse the halves.

With the above described process, the search will end with the next iteration since the value at the half is already Pizzeria.

Implement a binarySearch function that takes an array and searchItem as arguments and returns the index if it is found and -1 otherwise. You may assume that the array passed in will always be sorted.

Examples:

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);                                // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);                                // 7
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'); // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'); // 6
*/

function binarySearch(arr, term) {
  var high = arr.length - 1;
  var low = 0;
  var mid;

  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === term) {
      return mid;
    } else if (arr[mid] < term) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));