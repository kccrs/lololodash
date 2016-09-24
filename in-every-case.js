var _ = require('lodash');

var worker = function(cities) {
  return _.forEach(cities, function(city) {
    if (city.population >= 1.00) {
      return city.size = 'big';
    }
    if (city.population >= 0.5) {
      return city.size = "med";
    }
    if (city.population < 0.5) {
      return city.size = "small";
    }
  });
};

module.exports = worker;
