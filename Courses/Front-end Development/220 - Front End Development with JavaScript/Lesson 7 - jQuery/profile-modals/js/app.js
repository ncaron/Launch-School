$('#team li > a').click(function(e) {
  e.preventDefault();

  var $member = $(this);

  $member.nextAll('div').fadeIn(400);
});

$('.modal-layer, a.close').click(function(e) {
  e.preventDefault();

  $('.modal-layer, .modal').filter(':visible').fadeOut(400);
});