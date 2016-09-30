'use strict';
var _ = require('lodash');

var template = function(input) {
  var newTemplate = 'Hello <%=name%> (logins: <%=login.length%>)';

    return _.template(newTemplate)(input);
};

module.exports = template;
