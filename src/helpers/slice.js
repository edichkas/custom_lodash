// Array slice from strat to end indexmethod
const push = require('./push');

function slice(array, start, end) {
    let result = [];
    for (let i = start; i < end; i++) result = push(result, array[i]);
    return result
}

module.exports = slice