// Creates an array of grouped elements, the first of which contains the first elements of the given arrays, 
// the second of which contains the second elements of the given arrays, and so on.

const length = require('../helpers/length');
const push = require('../helpers/push');
const chunk = require('./chunck');

function zip(...arrays) {
  let lOuter = length(arrays);
  let lInner = length(arrays[0]);
  let result = chunk(arrays[0])
  for (let i = 1; i < lOuter; i++) {
    for (let j = 0; j < lInner; j++) {
      result[j] = push(result[j], arrays[i][j]);
    }
  }
  return result;
}


module.exports = zip;