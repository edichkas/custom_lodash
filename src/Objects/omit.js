//this method creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
const length = require('../helpers/length');
function omit(obj, array) {
    let len = length(array);
    let result = { ...obj };
    for (let i = 0; i < len; i++) {
        let tmp = array[i];
        delete result[tmp];
    }
    return result;
}

module.exports = omit