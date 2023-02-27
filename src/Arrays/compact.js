// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
const length = require("../helpers/length");
const push = require('../helpers/push');

function compact(array) {
    let result = [];
    let index = 0; 
    for (let i = 0; i < length(array); i++) {
        if (array[i]) {
            result = push(result, array[i]);
            index++;
        }
    }
    return result;
}

module.exports = compact;