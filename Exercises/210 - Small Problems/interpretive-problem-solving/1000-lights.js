/*
You have a bank of switches before you, numbered from 1 to n. Each switch is connected to exactly one light that is initially off. You walk down the row of switches, and toggle every one of them. You go back to the beginning, and on this second pass you toggle switches 2, 4, 6, and so on. On the third pass, you go back again to the beginning and toggle switches 3, 6, 9, and so on. You repeat this process and keep going until you have been through n repetitions.

Write a program that takes one argument, total number of switches, and returns an array of lights that are on after n repetitions.

Examples

function lightsOn(switches) {
  // ..
}

lightsOn(5);   // [1, 4];

// detailed result of each round for 5 lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off; 1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off; 1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);  // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
*/


/*
- Parameters
  - Integer
    - Number of switches

- Edge
  - Zero
  - Negative
  - Float
  - String

- Return
  - Array
    - All switches that are currently on.

- Data Structure
  - Object
    - switch_number: boolean

- Algorithm
  - Outer loop from 1 to number of switches.
    - Inner loop through all switches. (1 to number of switches)
      - Toggle the switch at j.
      - Increase j by current iteration(i value from outer loop).
  - Filter the object that has a value of true.
    - Get array of all switches (keys)
    - Filter by checking switch[key] === true
*/

function lightsOn(switches) {
  if (typeof switches !== 'number' || switches <= 0 || !isInteger(switches)) {
    return 'ERROR: Input must be an interger greather than 0.';
  }

  var switchStates = {};
  var i;
  var j;

  for (i = 1; i <= switches; i += 1) {
    for (j = i; j <= switches; j += i) {
      if (switchStates[j] === false || switchStates[j] === undefined) {
        switchStates[j] = true;
      } else {
        switchStates[j] = false;
      }
    }
  }

  return getOnSwitches(switchStates);
}

function isInteger(num) {
  return num % 1 === 0;
}

function getOnSwitches(switchStates) {
  var switches = Object.keys(switchStates);

  return switches.filter(function(switchNum) {
    return switchStates[switchNum] === true;
  }).map(Number);
}

// Test Cases
console.log(lightsOn(5));     // [1, 4];
console.log(lightsOn(100));   // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(0));     // ERROR: Input must be an interger greather than 0.
console.log(lightsOn(-1));    // ERROR: Input must be an interger greather than 0.
console.log(lightsOn('HI'));  // ERROR: Input must be an interger greather than 0.
console.log(lightsOn(3.14));  // ERROR: Input must be an interger greather than 0.