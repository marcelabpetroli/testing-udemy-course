import { expect, it } from "vitest";
import { add } from "./math";

it("should add all number values in an array", () => {
  // Arrange
  const numbers = [3, 6];
  const expectedResult = numbers.reduce((acc, curr) => acc + curr, 0);

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResult);
});
