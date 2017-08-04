var questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein']
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  universe and everything?',
    options: ['66', '13', '111', '42']
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above']
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri']
  }
];

var answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

var App = {
  questions: questions,
  answerKey: answerKey,
  questionTemplate: Handlebars.compile($('#question-template').html()),
  displayQuestions: function() {
    this.questions.forEach(function(question) {
      $('fieldset').append(this.questionTemplate(question));
    }.bind(this));
  },
  handleSubmit: function(e) {
    e.preventDefault();

    var self = this;
    var questionId;
    var userAnswer;
    var correctAnswer;
    var messageBox;
    var message;

    $('.question').each(function() {
      $messageBox = $(this).find('.message');
      questionId = $(this).data().id;
      userAnswer = $(this).find(':checked').val();
      correctAnswer = self.answerKey[questionId];

      if (!userAnswer) {
        message = 'You did not answer this question. Correct answer is "' + correctAnswer + '".';
        $messageBox.addClass('incorrect');
      } else if (userAnswer !== correctAnswer) {
        message = 'Wrong answer. The correct answer is "' + correctAnswer + '".';
        $messageBox.addClass('incorrect');
      } else {
        message = 'Correct answer.'
        $messageBox.addClass('correct');
      }

      $messageBox.text(message);
    });

    $('#submit').prop('disabled', true)
    $('#reset').prop('disabled', false);
  },
  handleReset: function(e) {
    e.preventDefault();

    $('.message').removeClass('incorrect correct').text('');
    $('input').prop('checked', false);
    $('#reset').prop('disabled', true)
    $('#submit').prop('disabled', false);
  },
  init: function() {
    this.displayQuestions();

    $('#submit').on('click', this.handleSubmit.bind(this));
    $('#reset').on('click', this.handleReset.bind(this))
  }
};

App.init();