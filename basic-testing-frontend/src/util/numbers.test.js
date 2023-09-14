import { expect, it } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a string number to a number of type number", () => {
  const value = "23";

  const result = transformToNumber(value);

  expect(result).toBe(+value);
});

it("should yield NaN for non-transformable values", () => {
  const value = "string";
  const value2 = {};

  const result = transformToNumber(value);
  const result2 = transformToNumber(value2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});
