// 1. Set a variable, apples, to 3. Set a second variable, bananas, to 5. Write a conditional using == that checks
//    whether apples is equal to bananas. Log a message if true.
var apples = 3;
var bananas = 5;

if (apples == bananas) {
  console.log('Numbers 3 and 5 are not equal, this message will not log.');
}

// 2. Set the value of bananas to the string value "3". Use the same conditional as the previous exercise.
bananas = '3'
if (apples == bananas) {
  console.log('String bananas will be converted to a number. This message will log.');
}

// 3. Change the conditional from the previous exercise to use === instead. Why doesn't this one output a message?
if (apples === bananas) {
  console.log('Strict comparison, types are also checked and not converted. This message will not log.');
}

// 4. Create an else statement that logs a different message if false.
else {
  console.log('Because the above is false, this message will log.');
}

// 5. Between the if and else statements, insert an else if statement that checks whether apples == bananas. Log a
//    message stating that the two are the same number but different types.
if (apples === bananas) {
  console.log('Strict comparison, types are also checked and not converted. This message will not log.');
}
else if (apples == bananas) {
  console.log('This is not a strict comparison and the string is converted to a number. This message will log.');
}
else {
  console.log('Because the above is true, this message will not log.');
}

// 6. Move the else if statement into the else statement and change to an if statement. After your if statement, append
//    an else statement that outputs your "not strictly equal" message as before. The structure of the code should look
//    like:
//
//    else {
//      if (...) {
//        ...
//      }
//      else {
//        ...
//      }
//    }
if (apples === bananas) {
  console.log('Strict comparison, types are also checked and not converted. This message will not log.');
}
else {
  if (apples == bananas) {
      console.log('This is not a strict comparison and the string is converted to a number. This message will log.');
  }
  else {
    console.log('Because the above is true, this message will not log.');
  }
}

// 7. Set the variables apples and bananas to 3. Set a variable, areEqual, to the value of apples compared to bananas.
//    This works the same way as the if statements we have been writing, but instead of an if and the condition in
//    parentheses, we just use the condition from within the parentheses as the new value for our variable. Log the
//    value of areEqual.
apples = 3;
bananas = 3;
var areEqual = apples === bananas;
console.log(areEqual);

// 8. Set the value of apples to 3 and bananas to undefined. Set a variable named eitherOr to the value of apples or
//    bananas. This works the same as the previous exercise, where you write the comparison as the assignment of the
//    variable. Log the value of eitherOr.
apples = 3;
bananas = undefined;
var eitherOr = apples || bananas;
console.log(eitherOr);

// 9. Set the value of bananas to 1. Perform the same assignment for eitherOr. Log the value of eitherOr. Afterward,
//    assign bananas || apples to the eitherOr variable. Note that the value is now the bananas variable instead of
//    apples. JavaScript reads this statement from left to right. If the left-side has a truthy value, it is used.
//    Otherwise, the right-side value is used.
bananas = 1;
eitherOr = apples || bananas;
console.log(eitherOr);
eitherOr = bananas || apples;
console.log(eitherOr);

// 10. The ternary operator is another useful method for defining a variable to one of two possible values. This can
//     also replace an if and else statement, but can sometimes be confusing when used that way.
//
//    Create two new variables, lastName and familyMessage. Set lastName to your last name, then use a ternary that
//    checks whether lastName is equal to your last name to set familyMessage to either "You're part of the family!" or
//    "You're not family."
var lastName = 'Caron';
var familyMessage;

familyMessage = lastName === 'Caron' ? 'You\'re part of the family!' : 'You\'re not family.';