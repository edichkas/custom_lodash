/*
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.toPairs(new Foo);
// => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
*/

const toPairs = require('../../src/objects/toPairs');

var object = { 'a': 1, 'b': '2', 'c': 3 };
test('test for toPairs function', () => {
    expect(toPairs(object, ['a', 'c'])).toStrictEqual(null);
});