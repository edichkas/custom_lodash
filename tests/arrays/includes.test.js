/*
_.includes([1, 2, 3], 1);
// => true
 
_.includes([1, 2, 3], 1, 2);
// => false
 
_.includes({ 'a': 1, 'b': 2 }, 1);
// => true
 
_.includes('abcd', 'bc');
// => true
*/

const includes = require('../../src/arrays/includes');

test('test of "includes" function', () => {
    expect(includes([1, 2, 3], 1)).toStrictEqual(true);
});

test('test of "includes" function', () => {
    expect(includes([1, 2, 3], 1, 2)).toStrictEqual(false);
});

test('test of "includes" function', () => {
    expect(includes({ 'a': 1, 'b': 2 }, 1)).toStrictEqual(true);
});

test('test of "includes" function', () => {
    expect(includes('abcd', 'bc')).toStrictEqual(true);
});