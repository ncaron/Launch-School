// 1. The result of the following calculation is a string. Using type coercion, correct the calculation to produce the
//    numeric result instead.
//
//    var x = '13';
//    var y = 9;
//
//    console.log(x + y);
var x = '13';
var y = 9;
console.log(parseInt(x) + y);

// 2. Using the same block of JavaScript, change the addition operator to a multiplication operator and leave x as a
//    string. Will the result be a string or a number?
console.log('The result will be a number because a multiplication with a string will coerce it to a number.');
console.log(x + y);


// 3. Convert the three parts of this telephone number to strings to produce a valid phone number.
//
//    var npa = 212;
//    var nxx = 555;
//    var num = 1212;
//
//    console.log(npa + nxx + num);
var npa = 212;
var nxx = 555;
var num = 1212;

console.log(npa.toString() + nxx.toString() + num.toString());

// 4. You can also use the String () constructor to create Strings from numbers. This is a function that takes an
//    argument and converts it to a string. Try it using the previous block of code; wrap each number in a call to
//    String().
console.log(String(npa) + String(nxx) + String(num));

// 5. The toString() method is yet another way to convert values to strings. Try using toString() to convert a boolean
//    and an array to a String. Did you get the result you expected?
//
//    var bool = true;
//    var arr = [1, 2, 3];
var bool = true;
var arr = [1, 2, 3];

console.log(bool.toString());
console.log(arr.toString())