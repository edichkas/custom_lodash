//
const length = require('../helpers/length');

function pick(obj, array) {
    let len = length(array);
    let result = {};
    for (let i = 0; i < len; i++) {
        let tmp = array[i];
        result = { ...result, [tmp]: obj[tmp] }
    }
    return result;
}

module.exports = pick