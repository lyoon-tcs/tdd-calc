class Calculator {
  constructor() {}

  getSum(a, b) {
    return a + b;
  }

  getDifference(a, b) {
    return a - b;
  }
}

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });
  // addition
  test('adds 2 numbers, then returns the sum', () => {
    const num1 = 4;
    const num2 = 6;
    const expected = num1 + num2;
    expect(calc.getSum(num1, num2)).toBe(expected);
  });
  test('should only add first two operands and returns sum, ignores the rest', () => {
    const num1 = 4;
    const num2 = 6;
    const num3 = 2;
    const expected = num1 + num2;
    expect(calc.getSum(num1, num2, num3)).toBe(expected);
  });
  test.todo('should return operand as sum only if one argument is passed');
  test.todo('should return 0 if no operands are passed');
  test.todo('should throw error if type is not number');
  // subtraction
  test.todo('should subtract two numbers and return difference');
  test.todo(
    'should only subtract first two operands and returns difference, ignores the rest'
  );
  test.todo(
    'should return operand as difference only if one argument is passed'
  );
  test.todo('should return 0 if no operands are passed');
  test.todo('should throw error if type is not number');
});
