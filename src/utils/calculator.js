class Calculator {
  constructor() {}

  getSum(a, b) {
    if (a === undefined && b === undefined) {
      return 0;
    } else if (b === undefined) {
      return a;
    } else if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Please use only numbers';
    } else {
      return a + b;
    }

    // if (typeof a !== 'number' && typeof b !== 'number') {
    //   return 'Please use only numbers';
    // } else if (a === undefined && b === undefined) {
    //   return 0;
    // } else if (b === undefined) {
    //   return a;
    // } else {
    //   return a + b;
    // }
  }

  getDifference(a, b) {
    return a - b;
  }
}

const calc = new Calculator();

console.log(calc.getSum(2));

module.exports = Calculator;
