//Creates a slice of array with n elements dropped from the beginning.
function drop(array, n = 1) {
    const result = [];
    let index = 0;
    for (let i = n; i < array.length; i++) {
      result[index] = array[i];
      index++;
    }
    return result;
  }
  
  module.exports = drop;