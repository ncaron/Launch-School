$('nav a').on('click', function(e) {
  e.preventDefault();

  var $e = $(this);
  var idx = $e.closest('li').index();

  $e.closest('nav').find('.active').removeClass('active');
  $e.addClass('active');

  $('#tabs article').hide().eq(idx).show();

  localStorage.setItem('activeNav', idx);
});

$(':radio').on('change', function() {
  var color = $(this).val();

  $(document.body).css('background', color);

  localStorage.setItem('background', color);
});

$('textarea').on('change', function(e) {
  localStorage.setItem('note', $(this).val());
});

setActiveNav(localStorage.getItem('activeNav'));
setBackground(localStorage.getItem('background'));
setNote(localStorage.getItem('note'));

function setActiveNav(idx) {
  if (idx === null) {
    return;
  }

  $('nav a').eq(idx).click();
}

function setBackground(color) {
  if (color === null) {
    return;
  }

  $('[value=' + color + ']').prop('checked', true).change();
}

function setNote(note) {
  $('textarea').val(note);
}