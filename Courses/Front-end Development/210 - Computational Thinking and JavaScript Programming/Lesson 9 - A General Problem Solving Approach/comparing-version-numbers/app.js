/*
While version numbers often appear to be decimal numbers, they are in fact a convenient notation for a more complicated
number system. The following are all legal version numbers:

1
1.0
1.2
3.2.3
3.0.0
4.2.3.0

Write a function that takes any two version numbers in this format and compare them with the result of this comparison
showing whether the first is less than, equal to, or greater than the second version:

If version1 > version2, we should return 1.
If version1 < version2, we should return -1.
If version1 === version2, we should return 0.

If either version number contains characters other than digits and the . character, we should return null.

Here is an example of version number ordering:

0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

function compareVersions(version1, version2) {
  // ...
}
*/


/*
- Compare version numbers.

- Input will be a string and should only contain numbers and dots.
  - Return null if input is invalid

- Return
  - 1 if the first is greater than the second.
  - -1 if the first is smaller than the second.
  - 0 if they are equal.

- Check if the input is valid.
  - Use Regex
    - Check if version only contains digits or dots, make sure only one consecutive dot.
      - /[^\d.]|\.{2,}/
    - Check to make sure the first and last characters are digits.
      - /^[^\d]|[^\d]$/
- split the string at each '.'
- map the digit strings to numbers
- pop the last 0 of the array as they are not needed.
- compare each number starting from the first.
*/

function compareVersions(version1, version2) {
  if (!checkValidVersions(version1, version2)) {
    return null;
  }

  var version1Arr = strToDigitArr(version1);
  var version2Arr = strToDigitArr(version2);

  removeTrailingZero(version1Arr);
  removeTrailingZero(version2Arr);

  var i;
  var end = version1Arr.length >= version2Arr.length ? version1Arr.length : version2Arr.length;

  for (i = 0; i < end; i += 1) {
    if (version1Arr[i] === undefined) {
      return -1;
    } else if (version2Arr[i] === undefined) {
      return 1;
    }

    if (version1Arr[i] > version2Arr[i]) {
      return 1;
    } else if (version1Arr[i] < version2Arr[i]) {
      return -1;
    }
  }

  return 0;
}

function strToDigitArr(version) {
  return version.split('.').map(function(digit) {
    return Number(digit);
  });
}

function checkValidVersions(version1, version2) {
  if (version1.match(/[^\d.]|\.{2,}/) || version2.match(/[^\d.]|\.{2,}/)) {
    return false;
  }

  if (version1.match(/^[^\d]|[^\d]$/) || version2.match(/^[^\d]|[^\d]$/)) {
    return false;
  }

  return true;
}

function removeTrailingZero(versionArr) {
  while (versionArr[versionArr.length - 1] === 0) {
    versionArr.pop();
  }
}

// Tests
console.log(compareVersions('1', '1.0'));            // 0
console.log(compareVersions('1.0', '1.1'));          // -1
console.log(compareVersions('1.2', '1.1'));          // 1
console.log(compareVersions('4.2.3.0', '3.0'));      // 1
console.log(compareVersions('2.0', '2.0.0.1'));      // -1
console.log(compareVersions('2.0', '2.0.0'));        // 0
console.log(compareVersions('1.2', '1.0.a.0'));      // null
console.log(compareVersions('1.2..1', '1.0'));       // null
console.log(compareVersions('1.2.0.0', '1.18.2'));   // -1
console.log(compareVersions('1', '1'));              // 0
console.log(compareVersions('2.3.4', '2.3.5'));      // -1
console.log(compareVersions('1.0', '1.0.5'));        // -1
console.log(compareVersions('.1.0', '1.0.5'));       // null
console.log(compareVersions('1.0', '1.0.5.'));       // -1