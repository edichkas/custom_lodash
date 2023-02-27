/*
function square(n) {
  return n * n;
}
 
_.map([4, 8], square);
// => [16, 64]
 
_.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] (iteration order is not guaranteed)
 
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
 
// The `_.property` iteratee shorthand.
_.map(users, 'user');
// => ['barney', 'fred']
*/

const map = require('../../src/arrays/map');

var users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
];

function square(n) {
    return n * n;
}

test('test of "map" function', () => {
    expect(map([4, 8])).toStrictEqual([4, 8]);
});

test('test of "map" function', () => {
    expect(map([4, 8], square)).toStrictEqual([16, 64]);
});

test('test of "map" function', () => {
    expect(map({ 'a': 4, 'b': 8 }, square)).toStrictEqual([16, 64]);
});

test('test of "map" function', () => {
    expect(map(users, 'user')).toStrictEqual(['barney', 'fred']);
});