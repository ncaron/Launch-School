var timer;
var $figcaption;

$('#exotic-animals').on('mouseenter', 'figure', function(e) {
  $figcaption = $(this).find('figcaption');

  timer = setTimeout(function() {
    $figcaption.fadeIn();
  }, 2000);
});

$('#exotic-animals').on('mouseleave', 'figure', function(e) {
  $figcaption = $(this).find('figcaption');

  if (timer) {
    clearTimeout(timer);
    timer = undefined;
  }

  $figcaption.fadeOut();
});