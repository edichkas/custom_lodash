/*
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }
*/
const pick = require('../../src/objects/pick');

var object = { 'a': 1, 'b': '2', 'c': 3 };
test('test for pick function', () => {
    expect(pick(object, ['a', 'c'])).toStrictEqual({ 'a': 1, 'c': 3 });
});