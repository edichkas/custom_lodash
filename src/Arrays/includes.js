// Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons. If fromIndex is negative, it's used as the offset from the end of collection.

const length = require('../helpers/length');

function includes(array, value, fromIndex = 0) {
  let len = length(array);
  for (let i = fromIndex; i < len; i++) {
    if (array[i] === value) return true;
  }
  return false;
}

module.exports = includes;