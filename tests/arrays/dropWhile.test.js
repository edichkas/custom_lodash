/*
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
_.dropWhile(users, function(o) { return !o.active; });
// => objects for ['pebbles']
 
// The `_.matches` iteratee shorthand.
_.dropWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['fred', 'pebbles']
 
// The `_.matchesProperty` iteratee shorthand.
_.dropWhile(users, ['active', false]);
// => objects for ['pebbles']
 
// The `_.property` iteratee shorthand.
_.dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
*/

const dropWhile = require('../../src/arrays/dropWhile');

var users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];

test('test of "dropWhile" function', () => {
    expect(dropWhile(users, function (o) { return !o.active; })).toStrictEqual([{ 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false }]);
});

test('test of "dropWhile" function matches itaratee', () => {
  expect(dropWhile(users, { 'user': 'barney', 'active': false })).toStrictEqual(['fred', 'pebbles']);
});
