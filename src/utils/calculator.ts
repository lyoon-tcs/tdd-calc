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
  // helper functions
  /**
   * @description checks if both arguments are numbers
   * @param {*} a - can be any value
   * @param {*} b - can be any value
   * @returns {number} a (any number), b (any number), 0, or doesn't return anything
   */
  getArguments(a, b) {
    if (a === undefined && b === undefined) {
      return 0;
    }
    if (a === undefined) {
      return b;
    }
    if (b === undefined) {
      return a;
    }
  }

  /**
   * @description checks if any/both arguments have undefined
   * @param {*} a - can be any value
   * @param {*} b - can be any value
   * @returns {boolean} if there is an undefined value, return true. If all's well return false.
   */
  hasUndefinedArguments(a, b) {
    if (a === undefined || b === undefined) {
      return true;
    }
    return false;
  }

  /**
   * @description checks if types of a & b are numbers
   * @param {*} a - can be any value
   * @param {*} b - can be any value
   * @returns {boolean} returns true if both a & b are numbers, false if not.
   */
  argumentsAreNumbers(a, b) {
    return typeof a === 'number' && typeof b === 'number';
  }

  /**
   * @description checks jest tests using helper functions above
   * @param {*} a - can be any value
   * @param {*} b - can be any value
   * @returns {number, boolean} - a number or boolean (true)
   */
  validate(a, b) {
    if (!this.argumentsAreNumbers(a, b)) {
      if (this.hasUndefinedArguments(a, b)) {
        return this.getArguments(a, b);
      }
      throw new Error('Only numbers are allowed!');
    }
    return true;
  }

  // operations
  /**
   * @description checks validity, sum of two numbers
   * @param {number} a - first number to add.
   * @param {number} b - second number to add.
   * @returns {number} sum of a and b.
   */
  getSum(a, b) {
    return this.validate(a, b) !== true ? this.validate(a, b) : a + b;
  }

  /**
   * @description checks validity, difference of two numbers
   * @param {number} a - first number to subtract.
   * @param {number} b - second number to subtract.
   * @returns {number} difference of a and b.
   */
  getDifference(a, b) {
    return this.validate(a, b) !== true ? this.validate(a, b) : a - b;
  }

  /**
   * @description checks validity, multiplication of two numbers
   * @param {number} a - first number to multiply.
   * @param {number} b - second number to multiply.
   * @returns {number} multiplication of a and b.
   */
  getMultiplication(a, b) {
    return this.validate(a, b) !== true ? this.validate(a, b) : a * b;
  }

  /**
   * @description checks validity, division of two numbers
   * @param {number} a - numerator.
   * @param {number} b - denominator.
   * @returns {number} a divided by b.
   */
  getDivision(a, b) {
    return this.validate(a, b) !== true ? this.validate(a, b) : a / b;
  }
}

module.exports = Calculator;