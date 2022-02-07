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
  // /**
  //  * @description takes in two numbers, outputs a number depending on conditions
  //  * @param {number | undefined} a - number or undefined (empty)
  //  * @param {number | undefined} b - number or undefined (empty)
  //  * @returns {number} - a (number), b (number), a + b (number), or 0 (number)
  //  */
  // getSum(a: number, b: number): number;
  // getSum(a: number, b: number, ...m: number[]): number;
  // getSum(a: undefined, b: number): number;
  // getSum(a: number, b: undefined): number;
  // getSum(a?: number, b?: number): number;
  // getSum(a: undefined, b: undefined): number;
  // getSum(a?: number, b?: number): number {
  //   if (a && b) {
  //     return a + b;
  //   } else if (a === undefined && b) {
  //     return b;
  //   } else if (b === undefined && a) {
  //     return a;
  //   } else {
  //     return 0;
  //   }
  // }

  calculate(
    // eslint-disable-next-line @typescript-eslint/ban-types
    operation: Function,
    a: number | undefined,
    b: number | undefined,
    extraArgs: number[]
  ): number {
    if (a && b && extraArgs.length >= 1) {
      return operation(a, b);
    } else if (a === undefined && b) {
      return b;
    } else if (b === undefined && a) {
      return a;
    } else {
      return 0;
    }
  }

  getSum(
    a?: number | undefined,
    b?: number | undefined,
    ...extraArgs: number[]
  ): number {
    const addFunction = (a: number, b: number): number => a + b;
    return this.calculate(addFunction, a, b, extraArgs);
  }

  /**
   * @description takes in two numbers, outputs a number depending on conditions
   * @param {number | undefined} a - number or undefined (empty)
   * @param {number | undefined} b - number or undefined (empty)
   * @returns {number} - a (number), b (number), a - b (number), or 0 (number)
   */
  getDifference(a: number, b: number): number;
  getDifference(a: number, b: number, ...m: number[]): number;
  getDifference(a: undefined, b: number): number;
  getDifference(a: number, b: undefined): number;
  getDifference(a?: number, b?: number): number;
  getDifference(a: undefined, b: undefined): number;
  getDifference(a?: number, b?: number): number {
    if (a && b) {
      return a - b;
    } else if (a === undefined && b) {
      return b;
    } else if (b === undefined && a) {
      return a;
    } else {
      return 0;
    }
  }

  /**
   * @description takes in two numbers, outputs a number depending on conditions
   * @param {number | undefined} a - number or undefined (empty)
   * @param {number | undefined} b - number or undefined (empty)
   * @returns {number} - a (number), b (number), a * b (number), or 0 (number)
   */
  getMultiplication(a: number, b: number): number;
  getMultiplication(a: number, b: number, ...m: number[]): number;
  getMultiplication(a: undefined, b: number): number;
  getMultiplication(a: number, b: undefined): number;
  getMultiplication(a?: number, b?: number): number;
  getMultiplication(a: undefined, b: undefined): number;
  getMultiplication(a?: number, b?: number): number {
    if (a && b) {
      return a * b;
    } else if (a === undefined && b) {
      return b;
    } else if (b === undefined && a) {
      return a;
    } else {
      return 0;
    }
  }

  /**
   * @description takes in two numbers, outputs a number depending on conditions
   * @param {number | undefined} a - number or undefined (empty)
   * @param {number | undefined} b - number or undefined (empty)
   * @returns {number} - a (number), b (number), a / b (number), or 0 (number)
   */
  getDivision(a: number, b: number): number;
  getDivision(a: number, b: number, ...m: number[]): number;
  getDivision(a: undefined, b: number): number;
  getDivision(a: number, b: undefined): number;
  getDivision(a?: number, b?: number): number;
  getDivision(a: undefined, b: undefined): number;
  getDivision(a?: number, b?: number): number {
    if (a && b) {
      return a / b;
    } else if (a === undefined && b) {
      return b;
    } else if (b === undefined && a) {
      return a;
    } else {
      return 0;
    }
  }
}

export default Calculator;
