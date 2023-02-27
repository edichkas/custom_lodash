// Creates a slice of array excluding elements dropped from the beginning. 
// Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
const length = require('../helpers/length');
const slice = require('../helpers/slice');

function dropWhile(array, predicate) {
  let len = length(array), index = 0;
  for (let i = 0; i < len; i++) {
    if (!predicate(array[i], i, array)) {
      index = i;
      break;
    }
  }
  if (index === 0) return [];
  else return slice(array, 0, index);
}

module.exports = dropWhile;