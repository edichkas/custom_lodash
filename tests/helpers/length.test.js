const length = require('../../src/helpers/length');
/*
_.length([1, 2, 3]);
// => 3
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []
 
_.drop([1, 2, 3], 0);
// => [1, 2, 3]
*/

test('length([1, 2, 3])', () => {
    expect(length([1, 2, 3])).toStrictEqual(3);
});

test('length(null)', () => {
    expect(length(null)).toStrictEqual(0);
});
