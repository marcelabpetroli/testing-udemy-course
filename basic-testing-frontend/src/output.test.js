import { describe, it, expect } from "vitest";
import { generateResultText } from "./output";

describe("generateResultText()", () => {
  it("should return a string regardless of the inputted value", () => {
    const inputStr = "String";
    const inputNum = 23;
    const inputObj = {};

    const resultStr = generateResultText(inputStr);
    const resultNum = generateResultText(inputNum);
    const resultObj = generateResultText(inputObj);

    expect(resultStr).toBeTypeOf("string");
    expect(resultNum).toBeTypeOf("string");
    expect(resultObj).toBeTypeOf("string");
  });

  it("should return the parameter passed as a string", () => {
    const input = 23;

    const result = generateResultText(input);

    expect(result).toContain(input.toString());
  });
});
