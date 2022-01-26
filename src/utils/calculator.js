/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

/**
 * Calculator class has 4 basic operations: add, subtract, multiply, divide.
 * @author Lawrence Yoon
 * @date 01-20-2022
 * @outstanding implement multiply & divide methods
 */
class Calculator {
  // helper functions
  testChecker(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      if (a === undefined && b === undefined) {
        return 0;
      }
      if (b === undefined) {
        return a;
      }
      throw Error('Only numbers are allowed!');
    }
  }

  /**
   * @description Sum of two numbers.
   * @param {number} a - first number to add.
   * @param {number} b - second number to add.
   * @returns {number} sum of a + b.
   */
  getSum(a, b) {
    return this.testChecker(a, b) === undefined
      ? a + b
      : this.testChecker(a, b);
  }

  getDifference(a, b) {
    return this.testChecker(a, b) === undefined
      ? a - b
      : this.testChecker(a, b);
  }

  getMultiplication(a, b) {
    return this.testChecker(a, b) === undefined
      ? a * b
      : this.testChecker(a, b);
  }

  getDivision(a, b) {
    return this.testChecker(a, b) === undefined
      ? a / b
      : this.testChecker(a, b);
  }
}

module.exports = Calculator;
