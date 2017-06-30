var $thumbnailsLi = $('li');

$thumbnailsLi.click(function(e) {
  var $thumbnailsImg = $thumbnailsLi.find('img');
  var $current = $(e.currentTarget).find('img');

  if (!$current.hasClass('active')) {
    $thumbnailsImg.removeClass('active');
    $current.addClass('active');

    var $figure = $('figure');
    var $toReplace = $('figure img');
    var $active = $('li img.active');

    $toReplace.remove();
    $figure.prepend($active.clone());
  }
});

// 37 - left arrow
// 39 - right arrow
$(document).keyup(function(e) {
  var key = e.which;
  var $active = $('li img.active').parent();
  var $otherElement;

  if (key === 39) {
    $otherElement = $active.next();

    if ($otherElement.length === 0) {
      $otherElement = $thumbnailsLi.first();
    }

    $otherElement.trigger('click');
  } else if (key === 37) {
    $otherElement = $active.prev();

    if ($otherElement.length === 0) {
      $otherElement = $thumbnailsLi.last();
    }

    $otherElement.trigger('click');
  }
});