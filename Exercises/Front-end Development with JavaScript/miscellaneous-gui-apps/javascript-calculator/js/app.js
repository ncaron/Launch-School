var App = {
  result: 0,
  current: '0',
  currentOp: '+',
  calculation: '',
  newBox: true,
  addDigit: function(digit) {
    if (this.newBox) {
      this.current = digit;
      this.newBox = false;
    } else {
      this.current += digit;
    }
  },
  addDot: function() {
    if (this.current.indexOf('.') === -1) {
      this.current += '.';
      this.newBox = false;
    }
  },
  chooseControl: function(control) {
    if (control === 'C') {
      this.clearCurrent();
    } else if (control == 'CE') {
      this.clearAll();
    } else if (control === 'NEG') {
      this.neg();
    }
  },
  clearCalculation: function() {
    this.calculation = '';
    this.calculationBox.textContent = this.calculation;
  },
  clearCurrent: function() {
    this.current = '0';
    this.displayNumber(this.current);
    this.newBox = true;
  },
  clearAll: function() {
    this.clearCurrent();
    this.clearCalculation();
    this.result = 0;
  },
  neg: function() {
    this.current = String(Number(this.current) * -1);
    this.displayNumber(this.current);
  },
  doOp: function() {
    var number = Number(this.current);

    switch (this.currentOp) {
      case '+':
        this.result += number;
        break;
      case '-':
        this.result -= number;
        break;
      case '*':
        this.result *= number;
        break;
      case '/':
        this.result /= number;
        break;
      case '%':
        this.result %= number;
        break;
    }

    this.displayNumber(this.result);
  },
  showResult: function() {
    this.clearCalculation();
    this.displayNumber(this.result);
    this.current = String(this.result);
    this.result = 0;
  },
  displayNumber: function(number) {
    this.resultBox.textContent = number;
  },
  bind: function() {
    document.addEventListener('click', function(e) {
      e.preventDefault();

      var classes;
      var value;

      if (e.target.tagName === 'A') {
        classes = e.target.classList;
        value = e.target.textContent.trim();

        if (classes.contains('digit')) {
          this.addDigit(value);
          this.displayNumber(this.current);
        } else if (classes.contains('dot')) {
          this.addDot();
          this.displayNumber(this.current);
        } else if (classes.contains('control')) {
          this.chooseControl(value);
        } else if (classes.contains('op')) {
          this.calculation += this.current + ' ' + value + ' ';
          this.calculationBox.textContent = this.calculation;
          this.doOp();
          this.currentOp = value;
          this.newBox = true;
        } else if (classes.contains('result')) {
          this.doOp();
          this.showResult();
          this.newBox = true;
        }
      }
    }.bind(this));
  },
  init: function() {
    this.resultBox = document.querySelector('#result');
    this.calculationBox = document.querySelector('#calculation');
    this.bind();
  }
};

App.init();