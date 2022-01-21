class Calculator {
  constructor() {}

  getSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      if (a === undefined && b === undefined) {
        return 0;
      }
      if (b === undefined) {
        return a;
      }
      return 'Please use only numbers';
    }
    return a + b;
  }

  getDifference(a, b) {
    return a - b;
  }
}

module.exports = Calculator;
