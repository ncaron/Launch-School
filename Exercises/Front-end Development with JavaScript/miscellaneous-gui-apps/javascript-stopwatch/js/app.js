var App = {
  running: false,
  centiseconds: 0,
  seconds: 0,
  minutes: 0,
  hours: 0,
  startWatch: function() {
    var self = this;

    self.timer = setInterval(function() {
      self.centiseconds += 1;

      if (self.centiseconds >= 100) {
        self.centiseconds = 0;
        self.incrementSeconds();
      }

      self.$centisecondsSpan.text(self.pad(self.centiseconds));
    }, 10);
  },
  stopWatch: function() {
    clearTimeout(this.timer);
  },
  resetWatch: function() {
    clearTimeout(this.timer);
    this.centiseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.setTime();
    $('#control').text('Start');
    this.running = false;
  },
  incrementSeconds: function() {
    this.seconds += 1;

    if (this.seconds >= 60) {
      this.seconds = 0;
      this.incrementMinutes();
    }

    this.$secondsSpan.text(this.pad(this.seconds));
  },
  incrementMinutes: function() {
    this.minutes += 1;

    if (this.minutes >= 60) {
      this.minutes = 0;
      this.incrementHours();
    }

    this.$minutesSpan.text(this.pad(this.minutes));
  },
  incrementHours: function() {
    this.hours += 1;
    this.$hoursSpan.text(this.pad(this.hours));
  },
  pad: function(num) {
    var numArr = num.toString().split();

    if (num.toString().length < 2) {
      numArr.unshift('0');
    }

    return numArr.join('');
  },
  cacheTime: function() {
    this.$centisecondsSpan = $('#centiseconds');
    this.$secondsSpan = $('#seconds');
    this.$minutesSpan = $('#minutes');
    this.$hoursSpan = $('#hours');
  },
  setTime: function() {
    this.$centisecondsSpan.text(this.pad(this.centiseconds));
    this.$secondsSpan.text(this.pad(this.seconds));
    this.$minutesSpan.text(this.pad(this.minutes));
    this.$hoursSpan.text(this.pad(this.hours));
  },
  bind: function() {
    var self = this;

    $('#control').on('click', function(e) {
      e.preventDefault();

      if (self.running) {
        self.stopWatch();
        $(this).text('Start');
      } else {
        self.startWatch();
        $(this).text('Stop');
      }
      self.running = !self.running;
    });

    $('#reset').on('click', function(e) {
      e.preventDefault();

      self.resetWatch();
    });
  },
  init: function() {
    this.cacheTime();
    this.bind();
    this.setTime();
  }
}

App.init();