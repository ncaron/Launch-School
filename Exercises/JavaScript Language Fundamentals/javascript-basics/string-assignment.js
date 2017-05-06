/*
Take a look at the following code:

var name = 'Bob';
var saveName = name;
name = 'Alice';
console.log(name, saveName);
What does this code log to the console? Think about it for a moment before continuing.

If you said that code logged:

Alice Bob
you are 100% correct, and the answer should come as no surprise. Now, let's look at something a bit different:

var name = 'Bob';
var saveName = name;
name.toUpperCase();
console.log(name, saveName);
What does this log? Can you explain these results?
*/

// LOGS
// Bob Bob

// name.toUpperCase() doesn't save its return value to either of the strings and since strings are immutable, there is
// no change.

var name = 'Bob';
var saveName = name;
name.toUpperCase();
console.log(name, saveName);