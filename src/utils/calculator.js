class Calculator {
  constructor() {
    this.errorMessage = 'Please use only numbers';
  }

  getSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      if (a === undefined && b === undefined) {
        return 0;
      }
      if (b === undefined) {
        return a;
      }
      return this.errorMessage;
    }
    return a + b;
  }

  getDifference(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      if (a === undefined && b === undefined) {
        return 0;
      }
      if (b === undefined) {
        return a;
      }
      return this.errorMessage;
    }
    return a - b;
  }
}

module.exports = Calculator;
