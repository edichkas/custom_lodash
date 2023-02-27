// Array length
function length(array) {
    let len = 0;
    if(array) while (array[len] !== undefined) len++;
    return len;
  }
  
  module.exports = length;