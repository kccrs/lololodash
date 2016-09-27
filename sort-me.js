 var _ = require('lodash');

 var worker = (items) => {
    return _.sortBy(items, 'quantity').reverse();
 };

 module.exports = worker;
