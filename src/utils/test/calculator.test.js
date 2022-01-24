/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

const calculator = require('../calculator');

describe('Calculator', () => {
  let calc;
  const NOT_NUMBER_ERROR = 'Please use only numbers';

  beforeEach(() => {
    calc = new calculator();
  });

  describe('Addition', () => {
    test('adds 2 numbers, then returns the sum', () => {
      expect(calc.getSum(5, 1)).toBe(6);
    });
    test('should only add first two operands and returns sum, ignores the rest', () => {
      expect(calc.getSum(5, 1, 3)).toBe(6);
    });
    test('should return operand as sum only if one argument is passed', () => {
      expect(calc.getSum(5)).toBe(5);
    });
    test('should return 0 if no operands are passed', () => {
      expect(calc.getSum()).toBe(0);
    });
    test('should say error message if type is not a number', () => {
      expect(calc.getSum(1, 'foo')).toBe(NOT_NUMBER_ERROR);
      expect(calc.getSum('foo', 1)).toBe(NOT_NUMBER_ERROR);
    });
  });

  describe('Subtraction:', () => {
    test('should subtract two numbers and return difference', () => {
      expect(calc.getDifference(10, 5)).toBe(5);
    });
    test('should only subtract first two operands and returns difference, ignores the rest', () => {
      expect(calc.getDifference(10, 3, 2)).toBe(7);
    });
    test('should return operand as difference only if one argument is passed', () => {
      expect(calc.getDifference(1)).toBe(1);
    });
    test('should return 0 if no operands are passed', () => {
      expect(calc.getDifference()).toBe(0);
    });
    test('should throw error if type is not number', () => {
      expect(calc.getDifference(1, 'foo')).toBe(NOT_NUMBER_ERROR);
      expect(calc.getDifference('foo', 1)).toBe(NOT_NUMBER_ERROR);
    });
  });
  describe('Multiplication:', () => {
    test('should multiply two numbers and return value', () => {
      expect(calc.getMultiplication(2, 3)).toBe(6);
    });
    test('should only multiply first two operands and returns value, ignores the rest', () => {
      expect(calc.getMultiplication(5, 2, 3)).toBe(10);
    });
    test('should return operand as value only if one argument is passed', () => {
      expect(calc.getMultiplication(2)).toBe(2);
    });
    test('should return 0 if no operands are passed', () => {
      expect(calc.getMultiplication()).toBe(0);
    });
    test('should throw error if type is not number', () => {
      expect(calc.getMultiplication(1, 'foo')).toBe(NOT_NUMBER_ERROR);
      expect(calc.getMultiplication('foo', 1)).toBe(NOT_NUMBER_ERROR);
    });
  });
  describe('Division:', () => {
    test('should divide two numbers and return value', () => {
      expect(calc.getDivision(6, 3)).toBe(2);
    });
    test('should only divide first two operands and returns value, ignores the rest', () => {
      expect(calc.getDivision(12, 3, 2)).toBe(4);
    });
    test('should return operand as value only if one argument is passed', () => {
      expect(calc.getDivision(2)).toBe(2);
    });
    test('should return 0 if no operands are passed', () => {
      expect(calc.getDivision()).toBe(0);
    });
    test('should throw error if type is not number', () => {
      expect(calc.getDivision(1, 'foo')).toBe(NOT_NUMBER_ERROR);
      expect(calc.getDivision('foo', 1)).toBe(NOT_NUMBER_ERROR);
    });
  });
});
