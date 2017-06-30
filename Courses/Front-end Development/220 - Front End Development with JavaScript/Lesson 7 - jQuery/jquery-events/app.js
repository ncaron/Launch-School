$('form').on('submit', function(event) {
  event.preventDefault();
  
  var $key = $('#key').val();
  var keyCode = $key.charCodeAt(0);

  $(document).off('keypress').on('keypress', function(event) {
    if (event.which !== keyCode) {
      return;
    }

    $('a').trigger('click');
  });
});

$('a').on('click', function(event) {
  event.preventDefault();

  $('#accordion').slideToggle();
});