/*
We have the following Array of information for some popular bands:

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

There are problems with this data, though, so we first have to clean it up before we can use it:

The band countries are wrong: all the bands should have 'Canada' as the country.

The band name should have all words capitalized.

Remove all dots from the band names.

Write a function that can process the input band Array and return an Array that contains the fixed information:

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  // ...
}

processBands(bands);

// should return:

[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
*/

function processBands(bands) {
  return bands.map(function(band) {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);

    return band;
  });
}

function updateCountry(band) {
  band.country = 'Canada';
}

function capitalizeBandName(band) {
  band.name = band.name.split(' ').map(function(word) {
    return capitalizeString(word);
  }).join(' ');
}

function capitalizeString(string) {
  var initial = string[0].toUpperCase();
  var rest = string.slice(1);
  return initial + rest;
}

function removeDotsInBandName(band) {
  band.name = band.name.replace(/[.]/g, '');
}

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands));