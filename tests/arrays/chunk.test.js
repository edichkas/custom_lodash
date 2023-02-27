/*
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
*/

const chunk = require('../../src/arrays/chunk');

test(`array ['a', 'b', 'c', 'd'] is chunked into [[1, 2], [3, 4], [5]]`, () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([['a', 'b'], ['c', 'd']]);
});

test('chunk empty array', () => {
    expect(chunk([], 5)).toStrictEqual([]);
});

test('chunk with size=0', () => {
    expect(chunk([1, 2, 3, 4, 5], 0)).toStrictEqual([]);
});

test('chunk with default value', () => {
    expect(chunk([1, 2, 3, 4, 5])).toStrictEqual([[1], [2], [3], [4], [5]]);
});