var $list = $('#list');

$('form').submit(function(e) {
  e.preventDefault();

  var item = $('#item-name').val();
  var quantity = Number($('#item-quantity').val());

  quantity = quantity <= 0 ? 1 : quantity;
  $list.append('<li>' + quantity + ' ' + item + '</li>');
  this.reset();
});