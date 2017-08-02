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
  make: 'All',
  model: 'All',
  year: 'All',
  price: 'All',
  models: [],
  filteredMakes: [],
  filteredModels: [],
  fitleredYears: [],
  filteredPrices: [],
  filteredCars: [],
  cacheTemplate: function() {
    var $carTemplateID = $('#car-template');
    var $modelTemplateID = $('#model-template');

    this.carTemplate = Handlebars.compile($carTemplateID.html());
    this.modelTemplate = Handlebars.compile($modelTemplateID.html());

    $carTemplateID.remove();
    $modelTemplateID.remove();
  },
  displayModels: function() {
    $('#model').html(this.modelTemplate({model:this.filteredModels}));
  },
  displayMakes: function() {
    $('#make').html(this.modelTemplate({model:this.filteredMakes}));
  },
  displayYears: function() {
    $('#year').html(this.modelTemplate({model:this.fitleredYears}));
  },
  displayPrices: function() {
    $('#price').html(this.modelTemplate({model:this.filteredPrices}));
  },
  displayCars: function() {
    $('#cars').html(this.carTemplate({car:this.filteredCars}));
  },
  filterSelect: function(prop) {
    var self = this;
    var filteredProp = [];

    self.filteredCars.forEach(function(car) {
      if (filteredProp.indexOf(car[prop]) === -1) {
        filteredProp.push(car[prop]);
      }
    });

    return filteredProp;
  },
  filterMakes: function() {
    this.filteredMakes = this.filterSelect('make');
    this.filteredMakes.sort();
    this.filteredMakes.unshift('All');
    this.displayMakes();
  },
  filterModels: function() {
    this.filteredModels = this.filterSelect('model');
    this.filteredModels.sort();
    this.filteredModels.unshift('All');
    this.displayModels();
  },
  filterYears: function() {
    this.fitleredYears = this.filterSelect('year');
    this.fitleredYears.sort();
    this.fitleredYears.unshift('All');
    this.displayYears();
  },
  filterPrices: function() {
    this.filteredPrices = this.filterSelect('price');
    this.filteredPrices.sort();
    this.filteredPrices.unshift('All');
    this.displayPrices();
  },
  filterCars: function() {
    var self = this;
    var make;
    var model;
    var year;
    var price;

    self.filteredCars = cars.filter(function(car) {
      make = self.make === 'All' || self.make === car.make;
      model = self.model === 'All' || self.model === car.model;
      year = self.year === 'All' || self.year.toString() === car.year.toString();
      price = self.price === 'All' || self.price.toString() === car.price.toString();

      if (make && model && year && price) {
        return car;
      }
    });
  },
  bind: function() {
    var self = this;

    $('form').on('change', function(e) {
      self.make = $(this).find('#make')[0].value;
      self.model = $(this).find('#model')[0].value;
      self.price = $(this).find('#price')[0].value;
      self.year = $(this).find('#year')[0].value;

      var id = $(e.target)[0].id.toLowerCase();

      self.filterCars();

      if (id !== 'make') {
        self.filterMakes();
        $('#make option[value=' + self.make + ']').prop('selected', true);
      }

      if (id !== 'model') {
        self.filterModels();
        $('#model option[value=' + self.model + ']').prop('selected', true);
      }

      if (id !== 'year') {
        self.filterYears();
        $('#year option[value=' + self.year + ']').prop('selected', true);
      }

      if (id !== 'price') {
        self.filterPrices();
        $('#price option[value=' + self.price + ']').prop('selected', true);
      }
    });

    $('form').on('submit', function(e) {
      e.preventDefault();

      self.displayCars();
    });
  },
  init: function() {
    var self = this;

    self.cars.forEach(function(car) {
      if (self.models.indexOf(car.model) === -1) {
        self.models.push(car.model);
      }
    });
    self.models.sort();
    self.models.unshift('All');

    self.cacheTemplate();
    self.filterCars();
    self.filterMakes();
    self.filterModels();
    self.filterPrices();
    self.filterYears();
    self.displayCars();
    self.bind();
  }
}

App.init();