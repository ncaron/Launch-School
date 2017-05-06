/*
What will the following code log to the console, and why? Don't run the code until you have tried to answer.

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];

for (var i = 0; i < array1.length; i++) {
  array2.push(array1[i]);
}

for (var i = 0; i < array1.length; i++) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
*/

// LOG
// ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']

// array1 and array2 are different arrays (objects). Any changes to 1 will not affect the other.

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];

for (var i = 0; i < array1.length; i++) {
  array2.push(array1[i]);
}

for (var i = 0; i < array1.length; i++) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);


/*
What will happen if an object literal was part of the array1 elements pushed to array2? Would changes made to the object
literal in array1 be reflect in array2?

How will you change the code so that any change made to array1 in the second for loop gets reflected to array2?
*/

// Yes, because objects are mutable and it has the same reference.

// Instead of looping over and copying the values, setting array2 = array1 will work.