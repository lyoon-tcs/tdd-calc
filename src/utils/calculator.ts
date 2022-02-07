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
   * @description takes 3 parameters and returns a number based on conditionals.
   * @param {number | undefined} a - number or undefined (empty)
   * @param {number | undefined} b - number or undefined (empty)
   * @param {Array} extraArgs - extra arguments after a & b grouped inside an array
   * @returns {number} - numbers: a, b, a (+, -, *, /) b, 0
   */
  calculate(
    operation: (a: number, b: number) => number,
    a: number | undefined,
    b: number | undefined,
    extraArgs: number[]
  ): number {
    if (a && b && extraArgs) {
      return operation(a, b);
    }
    if (a === undefined && b) {
      return b;
    } else if (b === undefined && a) {
      return a;
    } else {
      return 0;
    }
  }

  /**
   * @description returns sum, using calculate function
   * @param {number | undefined} a - number or undefined (empty)
   * @param {number | undefined} b - number or undefined (empty)
   * @param {Array} extraArgs - extra arguments after a & b, grouped inside an array
   * @returns {number} - sum of two numbers
   */
  getSum(a?: number, b?: number, ...extraArgs: number[]): number {
    const addFunction = (a: number, b: number): number => a + b;
    return this.calculate(addFunction, a, b, extraArgs);
  }

  /**
   * @description returns difference, using calculate function
   * @param {number | undefined} a - number or undefined (empty)
   * @param {number | undefined} b - number or undefined (empty)
   * @param {Array} extraArgs - extra arguments after a & b, grouped inside an array
   * @returns {number} - difference of two numbers
   */
  getDifference(a?: number, b?: number, ...extraArgs: number[]): number {
    const subtractFunction = (a: number, b: number): number => a - b;
    return this.calculate(subtractFunction, a, b, extraArgs);
  }

  /**
   * @description returns multiplication, using calculate function
   * @param {number | undefined} a - number or undefined (empty)
   * @param {number | undefined} b - number or undefined (empty)
   * @param {Array} extraArgs - extra arguments after a & b, grouped inside an array
   * @returns {number} - multiplication of two numbers
   */
  getMultiplication(a?: number, b?: number, ...extraArgs: number[]): number {
    const multiplyFunction = (a: number, b: number): number => a * b;
    return this.calculate(multiplyFunction, a, b, extraArgs);
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
