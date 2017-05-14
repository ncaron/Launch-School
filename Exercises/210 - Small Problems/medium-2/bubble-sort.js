/*
Bubble Sort is one of the simplest sorting algorithms available. It isn't an efficient algorithm, but it's a great exercise for student developers. In this exercise, you will write a function that does a bubble sort of an Array.

A bubble sort works by making multiple passes (iterations) through the Array. On each pass, each pair of consecutive elements are compared. If the first of the two elements is greater than the second, then the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps; at that point, the Array is completely sorted.

6 2 7 1 4           Start: compare 6 > 2? Yes
2 6 7 1 4           Exchange
2 6 7 1 4 6 > 7?    No (no exchange)
2 6 7 1 4 7 > 1?    Yes
2 6 1 7 4           Exchange
2 6 1 7 4 7 > 4?    Yes
2 6 1 4 7           Exchange
2 6 1 4 7 2 > 6?    No
2 6 1 4 7 6 > 1?    Yes
2 1 6 4 7           Exchange
2 1 6 4 7 6 > 4?    Yes
2 1 4 6 7           Exchange
2 1 4 6 7 6 > 7?    No
2 1 4 6 7 2 > 1?    Yes
1 2 4 6 7           Exchange
1 2 4 6 7 2 > 4?    No
1 2 4 6 7 4 > 6?    No
1 2 4 6 7 6 > 7?    No
1 2 4 6 7 1 > 2?    No
1 2 4 6 7 2 > 4?    No
1 2 4 6 7 4 > 6?    No
1 2 4 6 7 6 > 7?    No
1 2 4 6 7           No swaps; all done; sorted

We can stop iterating the first time we make a pass through the array without making any swaps; at that point, the entire Array is sorted.

For further information, including pseudo-code that demonstrates the algorithm as well as a minor optimization technique, see the Bubble Sort wikipedia page.

Write a function that takes an Array as an argument, and sorts that Array using the bubble sort algorithm as described. Note that sorting will be done "in-place"; that is, the solution will mutate the Array passed as an argument. You may assume that the Array contains at least 2 elements.

Examples

var array = [5, 3];
bubbleSort(array);
console.log(array);     // [3, 5]

array = [6, 2, 7, 1, 4]
bubbleSort(array);
console.log(array);     // [1, 2, 4, 6, 7]

array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);     // ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler']
*/

// use a while loop to continuously loop
// at every iteration, set swapped flag to false
// use a for loop to loop through the array and swap two elements if the first is bigger than second.
// if the swap happend, set the swapped flag to true
// after the for loop, if the swapped flag is still false, it means no swapping occured so break out of the loop.

function bubbleSort(arr) {
  var swapped;
  var temp;
  var i;

  while (true) {
    swapped = false;

    for (i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }

    if (swapped === false) {
      break;
    }
  }
}

var array = [5, 3];
bubbleSort(array);
console.log(array);

array = [6, 2, 7, 1, 4]
bubbleSort(array);
console.log(array);

array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array); 