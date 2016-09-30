'use strict';

var _ = require("lodash");

var commentsToPost = function (comments) {

    var counted = [];

    comments = _.groupBy(comments, "username");

    _.forEach(comments, function (item, name) {

        counted.push({
            username: name,
            commentCount: _.size(item)
        });
    });

    return _.sortBy(counted, "commentCount").reverse();
};

module.exports = commentsToPost;
