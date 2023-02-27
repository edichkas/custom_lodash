// Creates a slice of array with n elements taken from the beginning.
const length = require('../helpers/length');
const slice = require('../helpers/slice');

function take(array, n = 1) {
  let len = length(array);
  if (n > len) {
    return array;
  }
  return slice(array, 0, n);
}

module.exports = take;