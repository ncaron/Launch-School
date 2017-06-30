$('form').on('submit', function(e) {
  e.preventDefault();

  var num1 = Number($('#number1').val());
  var num2 = Number($('#number2').val());
  var operator = $('#operator').val();
  var answer;
  var answerBox = $('#answer');

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

  answerBox.text(answer);
});