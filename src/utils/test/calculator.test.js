// sum, multiply
const functions = require('../calculator');

describe('sum()', () => {
  test('adds 2 numbers and returns sum', () => {
    expect(functions.sum(5, 15)).toBe(20);
  });
});

describe('multiply()', () => {
  test('multiplies 2 numbers and returns result', () => {
    const numOne = 24;
    const numTwo = 2;
    expect(functions.multiply(numOne, numTwo)).toBe(48);
  });
});
