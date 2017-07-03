var $canvas = $('#canvas');

function getFormObject($form) {
  var formObject = {};

  $form.serializeArray().forEach(function(input) {
    formObject[input.name] = input.value;
  });

  return formObject;
}

function createElement(data) {
  var $div = $('<div/>', {
    class: data['shape-type'],
    data: data
  });

  resetElement($div);

  return $div;
}

function animateElement() {
  var $el = $(this);
  var data = $el.data();

  resetElement($el);

  $el.animate({
    left: Number(data.endX),
    top: Number([data.endY])
  }, 1000);
}

function resetElement($el) {
  var data = $el.data();

  $el.css({
    left: Number(data.startX),
    top: Number(data.startY)
  });
}

function stopAnimations() {
  $canvas.find('div').stop();
}

$('form').on('submit', function(e) {
  e.preventDefault();

  var $form = $(this);
  var data = getFormObject($form);

  $canvas.append(createElement(data));
});

$('#animate').on('click', function(e) {
  e.preventDefault();

  $canvas.find('div').each(animateElement);
});

$('#stop').on('click', function(e) {
  e.preventDefault();

  stopAnimations();
});