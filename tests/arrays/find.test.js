const find = require('../../src/arrays/find');

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];


test('test of "find" function', () => {
    expect(find(users, function (o) { return o.age < 40; })).toStrictEqual(null);
});
