class Calculator {
  constructor() {}

  getSum(a, b) {
    // if a && b is blank
    if (a === undefined && b === undefined) {
      return 0;
      // ONLY if no b (2nd arg)
    } else if (b === undefined) {
      return a;
    }
    // a || b type !== number
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Please use only numbers';
    }
    // proper args passed
    return a + b;
  }

  getDifference(a, b) {
    return a - b;
  }
}

const calc = new Calculator();

console.log(calc.getSum(2));

module.exports = Calculator;
