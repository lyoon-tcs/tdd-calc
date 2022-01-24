/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

const calculator = require("../calculator");

describe("Calculator", () => {
  let calc;
  const num1 = 8;
  const num2 = 6;
  const num3 = 4;
  const firstTwoSum = num1 + num2;
  const firstTwoDiff = num1 - num2;
  const firstTwoMultiply = num1 * num2;
  const errorMessage = "Please use only numbers";

  beforeEach(() => {
    calc = new calculator();
  });

  describe("Addition:", () => {
    test("adds 2 numbers, then returns the sum", () => {
      expect(calc.getSum(num1, num2)).toBe(firstTwoSum);
    });
    test("should only add first two operands and returns sum, ignores the rest", () => {
      expect(calc.getSum(num1, num2, num3)).toBe(firstTwoSum);
    });
    test("should return operand as sum only if one argument is passed", () => {
      expect(calc.getSum(num1)).toBe(num1);
    });
    test("should return 0 if no operands are passed", () => {
      expect(calc.getSum()).toBe(0);
    });
    test("should say error message if type is not a number", () => {
      expect(calc.getSum(1, "foo")).toBe(errorMessage);
      expect(calc.getSum("foo", 1)).toBe(errorMessage);
    });
  });

  describe("Subtraction:", () => {
    test("should subtract two numbers and return difference", () => {
      expect(calc.getDifference(num1, num2)).toBe(firstTwoDiff);
    });
    test("should only subtract first two operands and returns difference, ignores the rest", () => {
      expect(calc.getDifference(num1, num2, num3)).toBe(firstTwoDiff);
    });
    test("should return operand as difference only if one argument is passed", () => {
      expect(calc.getDifference(num1)).toBe(num1);
    });
    test("should return 0 if no operands are passed", () => {
      expect(calc.getDifference()).toBe(0);
    });
    test("should throw error if type is not number", () => {
      expect(calc.getDifference(1, "foo")).toBe(errorMessage);
      expect(calc.getDifference("foo", 1)).toBe(errorMessage);
    });
  });
  describe("Multiplication:", () => {
    test("should multiply two numbers and return value", () => {
      expect(calc.getMultiplication(num1, num2)).toBe(firstTwoMultiply);
    });
    test("should only multiply first two operands and returns value, ignores the rest", () => {
      expect(calc.getMultiplication(num1, num2)).toBe(firstTwoMultiply);
    });
    test("should return operand as value only if one argument is passed", () => {
      expect(calc.getMultiplication(num1)).toBe(num1);
    });
    test("should return 0 if no operands are passed", () => {
      expect(calc.getMultiplication()).toBe(0);
    });
    test("should throw error if type is not number", () => {
      expect(calc.getMultiplication(1, "foo")).toBe(errorMessage);
      expect(calc.getMultiplication("foo", 1)).toBe(errorMessage);
    });
  });
});
