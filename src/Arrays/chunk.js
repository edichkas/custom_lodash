
// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
const length = require("../helpers/length");
const push = require("../helpers/push");

function chunk(array, size = 1) {
  let l = length(array);
  if (l === 0 || size === 0) return [];
  let result = [], outerIndex = 0, innerArr = [];
  for (let i = 0; i < l; i++) {
    let index = i % size;
    innerArr[index] = array[i];
    if (index === size - 1 || i === l - 1) {
      result = push(result, innerArr);
      innerArr = [];
      outerIndex++;
    }
  }
  return result;
}

module.exports = chunk;