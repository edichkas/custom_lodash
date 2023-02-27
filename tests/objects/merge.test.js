/*
var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
 
var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};
 
_.merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
*/

const merge = require('../../src/objects/merge');

var object = { 'a': 1, 'b': '2', 'c': 3 };
test('test for merge function', () => {
    expect(merge(object, ['a', 'c'])).toStrictEqual(null);
});