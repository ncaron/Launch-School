document.querySelector('form').onsubmit = function(e) {
  e.preventDefault();

  var num1 = Number(document.getElementById('number1').value);
  var num2 = Number(document.getElementById('number2').value);
  var operator = document.getElementById('operator').value;
  var answerBox = document.getElementById('answer');

  if (operator === '+') {
    answer = num1 + num2;
  } else if (operator === '-') {
    answer = num1 - num2;
  } else if (operator === '*') {
    answer = num1 * num2;
  } else {
    if (num2 === 0) {
      answer = 'Cannot divide by 0.';
    } else {
      answer = num1 / num2;
    }
  }

  answerBox.innerHTML = answer;
};