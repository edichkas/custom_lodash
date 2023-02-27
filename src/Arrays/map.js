// Creates an array of values by running each element in collection thru iteratee. 
// The iteratee is invoked with three arguments: (value, index|key, collection).

const length = require('../helpers/length');
const push = require('../helpers/push');

function map(collection, iteratee = (n) => n) {
  let array = collection instanceof Array ? collection : Object.values(collection);
  const len = length(array);
  let result = [];
  for (let i = 0; i < len; i++) {
    let value = iteratee(array[i], i, array);
    result = push(result, value);
  }
  return result;
}

module.exports = map;