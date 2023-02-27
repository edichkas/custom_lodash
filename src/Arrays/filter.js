// Iterates over elements of collection, returning an array of all elements predicate returns truthy for.
// The predicate is invoked with three arguments: (value, index|key, collection).
const push = require('../helpers/push');

function filter(collection, predicate) {
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i], i, collection)) {
      result = push(result, collection[i]);
    }
  }
  return result;
}

module.exports = filter;