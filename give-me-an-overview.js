'use strict';
var _ = require("lodash");

var allOrders = function (orders) {

  var ordersArray = [],
    total = 0;

    orders = _.groupBy(orders, 'article');

    _.forEach(orders, function(item, key) {
      key = parseInt(key);
      total = 0;

      if (item.length ===1) {
        total = item[0].quantity;
      } else {
        total = _.reduce(item, function(sum, item) {
          return sum + item.quantity;
        }, 0);
      }

    ordersArray.push({
      article: key,
      total_orders: total
    });
  });

  ordersArray = _.sortBy(ordersArray, 'total_orders').reverse();
  return ordersArray;
};

module.exports = allOrders;
