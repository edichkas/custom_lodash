/*
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omit(object, ['a', 'c']);
// => { 'b': '2' }
*/
const omit = require('../../src/objects/omit');

var object = { 'a': 1, 'b': '2', 'c': 3 };
test('test for omit function', () => {
    expect(omit(object, ['a', 'c'])).toStrictEqual({ 'b': '2' });
});