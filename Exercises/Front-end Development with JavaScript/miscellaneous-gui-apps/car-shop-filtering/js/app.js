var cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000},
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corrolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

var App = {
  cars: cars,
  filtered: [],
  cacheTemplate: function() {
    var $carTemplateID = $('#car-template');

    this.carTemplate = Handlebars.compile($carTemplateID.html());
    $carTemplateID.remove();
  },
  renderCars: function() {
    $('#cars').html(this.carTemplate({car:this.cars}));
  },
  setData: function() {
    var self = this;

    $('form').serializeArray().forEach(function(data) {
      self[data.name] = data.value;
    });
  },
  filter: function() {
    var self = this;
    var make;
    var model;
    var year;
    var price;

    self.filtered = cars.filter(function(car) {
      make = self.make === 'all' || self.make === car.make.toLowerCase();
      model = self.model === 'all' || self.model === car.model.toLowerCase();
      year = self.year === 'all' || self.year === car.year.toString();
      price = self.price === 'all' || self.price === car.price.toString();

      if (make && model && year && price) {
        return car;
      }
    });

    self.displayFiltered();
  },
  displayFiltered: function() {
    $('#cars').html(this.carTemplate({car:this.filtered}));
  },
  bind: function() {
    var self = this;

    $('form').on('submit', function(e) {
      e.preventDefault();

      self.setData();
      self.filter();
    });
  },
  init: function() {
    this.cacheTemplate();
    this.renderCars();
    this.bind();
  }
}

App.init();