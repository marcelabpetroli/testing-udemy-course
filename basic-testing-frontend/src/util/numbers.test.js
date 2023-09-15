import { describe, it, expect } from "vitest";
import { transformToNumber, cleanNumbers } from "./numbers.js";

describe("transformToNumber()", () => {
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
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string numbers is provided", () => {
    const input = ["1", "2"];

    const result = cleanNumbers(input);

    expect(result[0]).toBeTypeOf("number");
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const input = ["", "2"];

    const cleanFn = () => cleanNumbers(input);

    expect(cleanFn).toThrow(/Invalid input - must not be empty/);
  });
});
