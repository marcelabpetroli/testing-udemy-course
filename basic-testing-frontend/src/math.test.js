import { expect, it } from "vitest";
import { add } from "./math";

it("should add all number values in an array", () => {
  // Arrange
  const numbers = [3, 6];

  // Act
  const result = add(numbers);
  const expectedResult = numbers.reduce((acc, curr) => acc + curr, 0);

  // Assert
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid number is provided", () => {
  // Arrange
  const inputs = ["invalid", 1];

  // Act
  const result = add(inputs);

  // Assert
  expect(result).toBeNaN();
});

it("should yield a correct sum if and array of numeric string values is provided", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);
  const expectedResult = numbers.reduce((acc, curr) => +acc + +curr, 0);

  expect(result).toBe(expectedResult);
});
