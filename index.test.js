const sortArr = require('./index');

test('array check', () => {
  expect(sortArr([1, 2, 0, 4, 3, 0, 5, 0])).toBe("[1,2,4,3,5,0,0,0]");
});