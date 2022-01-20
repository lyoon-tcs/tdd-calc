// sum, multiply
const functions = require('../calculator');

describe('sum()', () => {
  test('adds 2 numbers and returns sum', () => {
    expect(functions.sum(5, 15)).toBe(20);
  });
});
