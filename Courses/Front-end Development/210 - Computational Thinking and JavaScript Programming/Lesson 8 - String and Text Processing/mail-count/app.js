/*
The objective of this exercise is to build a function that parses a string of email data. The function takes an argument
that contains the data, parses it, then produces two basic statistics about the email:

The number of email messages found in the string
The date range of the email messages
The email messages string has the following characteristics:

The string contains multiple email messages separated by the delimiter string ##||##.

Each email message has five parts. The delimiter string #/# separates the parts.

The five parts are:

Sender
Subject
Date
Recipient
Body
All five parts occur in the sequence shown above.

Examples

function mailCount(emailData) {
  // ...
}

mailCount(emailData);

// console.output
Count of Email: 5
Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
*/

function mailCount(emailData) {
  var emails = emailData.split(/##\|\|##/);
  var segments = emails.map(function(email) {
    return email.split(/#\/#/);
  });

  var dates = segments.map(function(email) {
    return email[2].match(/\d{2}-\d{2}-\d{4}/)[0];
  });

  dates = minMaxDate(dates);

  console.log('Count of Email: ' + emails.length);
  console.log('Date Range: ' + dates[0].toDateString() + ' - ' + dates[1].toDateString());
}

function minMaxDate(dates) {
  var sorted = dates.map(function(date) {
    return Date.parse(date);
  }).sort();

  sorted = sorted.map(function(milliseconds) {
    return new Date(milliseconds);
  });

  return [sorted[0], sorted[sorted.length - 1]];
}

mailCount(emailData);