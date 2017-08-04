var ERRORS = {
  form: 'Form cannot be submitted until errors are corrected.',
  fname: {
    required: 'First name is a required field.',
    invalid: 'First name can only include letters, spaces and \'.',
  },
  lname: {
    required: 'Last name is a required field.',
    invalid: 'Last name can only include letters, spaces and \'.',
  },
  email: {
    required: 'Email is a required field.',
    invalid: 'Email must be in the format username@domain.com.'
  },
  password: {
    required: 'Password is a required field.',
    invalid: 'Password must be at least 10 characters long.'
  },
  phone: 'Phone number must be in the format XXX-XXX-XXXX.',
  creditCard: 'Please enter a valid credit card.'
};

var App = {
  $form: $('form'),
  $input: $('input'),
  checkInputValidity: function($input) {
    var validityState = $input[0].validity;
    var isValid;

    $input.removeClass();
    $input.next('.error-message').text('');

    if (validityState.valid) {
      $input.addClass('valid');
      isValid = true;
    } else {
      $input.addClass('invalid');
      this.displayError.call($input[0], validityState);
      isValid = false;
    }

    return isValid;
  },
  checkCardValidity: function() {
    var self = this;
    var isValid = true;



    $('#cc1, #cc2, #cc3, #cc4').each(function() {
      $(this).removeClass();

      if (!this.checkValidity()) {
        isValid = false;
        $(this).addClass('invalid');
      } else {
        $(this).addClass('valid');
      }
    });

    return isValid;
  },
  checkFormValidity: function() {
    var isValid = true;
    var i;

    for (i = 0; i < this.$input.length; i += 1) {
      if (!this.checkInputValidity($(this.$input[i]))) {
        isValid = false;
      }
    }

    return isValid;
  },
  displayError: function(validityState) {
    var inputID = this.id;
    var message = ERRORS[inputID];

    if (inputID !== 'phone' && inputID !== 'cc1' && inputID !== 'cc2' && inputID !== 'cc3' && inputID !== 'cc4') {
      if (validityState.valueMissing) {
        message = message['required'];
      } else {
        message = message['invalid'];
      }
    }

    $(this).next('.error-message').text(message);
  },
  serializeObject: function() {
    var $inputs = this.$form.find('input');
    var attributes = {};
    attributes.creditCard = '';

    $inputs.each(function() {
      id = this.id;

      if (id === 'cc1' || id === 'cc2' || id === 'cc3' || id === 'cc4') {
        attributes.creditCard += this.value;
      } else {
        attributes[id] = this.value;
      }
    });

    this.serializeString(attributes);
  },
  serializeString: function(attributes) {
    var serialized = '';
    var keys = Object.keys(attributes);
    var i;

    for (i = 0; i < keys.length; i += 1) {
      serialized += encodeURI(keys[i]) + '=' + encodeURI(attributes[keys[i]]);

      if (i !== keys.length - 1) {
        serialized += '&';
      }
    }

    $('#serialized-data').text(serialized);
  },
  submitForm: function(e) {
    e.preventDefault();

    if (!this.checkFormValidity()) {
      $(this.$form.find('.error-message')[0]).text(ERRORS.form);
    } else {
      $('.form-error').text('');
      this.serializeObject();
    }
  },
  bind: function() {
    var self = this;
    var i;

    for (i = 0; i < arguments.length; i += 1) {
      this.$input.on(arguments[i], function(e) {
        self.checkInputValidity($(e.target));
      });
    }

    $('#cc1, #cc2, #cc3, #cc4').off();

    for (i = 0; i < arguments.length; i += 1) {
      $('#cc1, #cc2, #cc3, #cc4').on(arguments[i], function(e) {
        if (!self.checkCardValidity()) {
          $(this).nextAll('.error-message').first().text(ERRORS.creditCard);
        } else {
          $(this).nextAll('.error-message').first().text('');
        }
      });
    }
  },
  preventInvalidKeys: function() {
    $('#fname, #lname').on('keypress', function(e) {
      if (!e.key.match(/[a-z]/i)) {
        e.preventDefault();
      }
    });

    $('#phone').on('keypress', function(e) {
      if (!e.key.match(/[0-9]|-/)) {
        e.preventDefault();
      }
    });

    $('#cc1, #cc2, #cc3, #cc4').on('keypress', function(e) {
      if (!e.key.match(/[0-9]/)) {
        e.preventDefault();
      }
    });
  },
  tabForward: function() {
    if (this.value.length === this.maxLength) {
      $(this).nextAll('input').first().focus();
    }
  },
  tabBackward: function(e) {
    if (e.key === 'Backspace' && this.value.length === 0) {
      $(this).prevAll('input').first().focus();
    }
  },
  init: function() {
    this.bind('blur', 'focus', 'input');
    this.preventInvalidKeys();
    this.$form.on('submit', this.submitForm.bind(this));
    $('#cc1, #cc2, #cc3').on('keyup', this.tabForward);
    $('#cc2, #cc3, #cc4').on('keydown', this.tabBackward);
  }
};

App.init();