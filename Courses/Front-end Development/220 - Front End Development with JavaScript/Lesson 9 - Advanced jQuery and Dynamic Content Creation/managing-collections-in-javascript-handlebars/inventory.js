var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      var date = new Date();

      $('#order_date').text(date.toUTCString());
    },
    cacheTemplate: function() {
      var $item_template = $('#inventory_item').remove();
      this.template = Handlebars.compile($item_template.html());
    },
    add: function() {
      this.lastId += 1;

      var item = {
        id: this.lastId,
        name: '',
        stockNumber: '',
        quantity: 1
      };

      this.collection.push(item);

      return item;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      var foundItem;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          foundItem = item;
          return false;
        }
      });

      return foundItem;
    },
    update: function($item) {
      var id = this.findID($item);
      var item = this.get(id);

      item.name = $item.find('[name^=item_name]').val();
      item.stockNumber = $item.find('[name^=item_stock_number]').val();
      item.quantity = $item.find('[name^=item_quantity]').val();
    },
    newItem: function(e) {
      e.preventDefault();

      var item = this.add();
      var $item = $(this.template({id: item.id}));

      $('#inventory').append($item);
    },
    findParent: function(e) {
      return $(e.target).closest('tr');
    },
    findID: function($item) {
      return Number($item.find('input[type=hidden]').val());
    },
    deleteItem: function(e) {
      e.preventDefault();

      var $item = this.findParent(e).remove();

      this.remove(this.findID($item));
    },
    updateItem: function(e) {
      var $item = this.findParent(e);

      this.update($item);
    },
    bindEvents: function() {
      $('#add_item').on('click', this.newItem.bind(this));
      $('#inventory').on('click', 'a.delete', this.deleteItem.bind(this));
      $('#inventory').on('blur', ':input', this.updateItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

$(inventory.init.bind(inventory));