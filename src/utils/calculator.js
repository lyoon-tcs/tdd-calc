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

  getMultiplication(a, b) {
    return a * b;
  }
}

module.exports = Calculator;
