var _ = require("lodash");

// var workers = [
//  { id: 22, username: "martin", active: true},
//  { id: 23, username: "max",    active: false},
//  { id: 24, username: "linda",  active: false}
// ];

var worker = function(workers) {
  return _.filter(workers, { active : true});
};

// worker();

module.exports = worker;
