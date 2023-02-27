/*
_.take([1, 2, 3]);
// => [1]
 
_.take([1, 2, 3], 2);
// => [1, 2]
 
_.take([1, 2, 3], 5);
// => [1, 2, 3]
 
_.take([1, 2, 3], 0);
// => []
*/
const take = require('../../src/arrays/take');

test('test of "take" function w/o param', () => {
    expect(take([1, 2, 3])).toStrictEqual([1]);
});

test('test of "take" function with param 2', () => {
    expect(take([1, 2, 3], 2)).toStrictEqual([1, 2]);
});

test('test of "take" function with bigger param', () => {
    expect(take([1, 2, 3], 5)).toStrictEqual([1, 2, 3]);
});

test('test of "take" function with 0', () => {
    expect(take([1, 2, 3], 0)).toStrictEqual([]);
});