'use strict';
var _ = require('lodash');

var performance = function (person) {

  person = _.sortBy(person, 'income');

  var average = _.reduce(person, function(sum, number) {
    return sum + number.income;
  }, 0);

  average = average/person.length;

  var underperform = _.filter(person, function(number) {
    return number.income <= average;
  });

  var overperform = _.filter(person, function(number) {
    return number.income > average;
  });

  return {
    average: average,
    underperform: underperform,
    overperform: overperform
  };

};

module.exports = performance;
