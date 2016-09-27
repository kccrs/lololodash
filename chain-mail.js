var _ = require("lodash");

var sortedWords = (words) => {
  return _
  .chain(words)
    .map((word) => {
      return word + 'chained';
    })
    .map((word) => {
      return word.toUpperCase();
    })
    .sortBy();
};

module.exports = sortedWords;
