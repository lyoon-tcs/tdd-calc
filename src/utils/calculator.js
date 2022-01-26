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
 */
class Calculator {
  /**
   * @description helper function for 4 operations below to pass tests.
   * @param {number} a - first value.
   * @param {number} b - second value.
   * @returns {number, undefined} returns 0, a, or undefined
   */
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
   * @returns {number} sum of a and b.
   */
  getSum(a, b) {
    return this.testChecker(a, b) === undefined
      ? a + b
      : this.testChecker(a, b);
  }

  /**
   * @description Difference of two numbers.
   * @param {number} a - first number to subtract.
   * @param {number} b - second number to subtract.
   * @returns {number} difference of a and b.
   */
  getDifference(a, b) {
    return this.testChecker(a, b) === undefined
      ? a - b
      : this.testChecker(a, b);
  }

  /**
   * @description Multiplication of two numbers.
   * @param {number} a - first number to multiply.
   * @param {number} b - second number to multiply.
   * @returns {number} multiplication of a and b.
   */
  getMultiplication(a, b) {
    return this.testChecker(a, b) === undefined
      ? a * b
      : this.testChecker(a, b);
  }

  /**
   * @description Division of two numbers.
   * @param {number} a - numerator.
   * @param {number} b - denominator.
   * @returns {number} a divided by b.
   */
  getDivision(a, b) {
    return this.testChecker(a, b) === undefined
      ? a / b
      : this.testChecker(a, b);
  }
}

module.exports = Calculator;
