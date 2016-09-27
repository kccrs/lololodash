var _ = require('lodash');

var worker = (workers) => {
  return _.filter(workers, { active : true});
};

module.exports = worker;
