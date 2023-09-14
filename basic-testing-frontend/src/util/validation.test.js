import { expect, it, describe } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("should throw an error if an empty string is provided", () => {
    const input = "";

    const resultFn = () => validateStringNotEmpty(input);

    expect(resultFn).toThrow();
  });

  it("should throw an error with a message that contains 'must not be empty'", () => {
    const input = "";

    const resultFn = () => validateStringNotEmpty(input);

    expect(resultFn).toThrow(/must not be empty/);
  });

  it("should throw an error if any other value than a string is provided", () => {
    const inputNum = 23;
    const inputObj = {};
    const inputArr = {};

    const resultFnNum = () => validateStringNotEmpty(inputNum);
    const resultFnObj = () => validateStringNotEmpty(inputObj);
    const resultFnArr = () => validateStringNotEmpty(inputArr);

    expect(resultFnNum).toThrow();
    expect(resultFnObj).toThrow();
    expect(resultFnArr).toThrow();
  });
});

describe("validateNumber()", () => {
  it("should throw an error if NaN is provided", () => {
    const input = NaN;

    const validationFn = () => validateNumber(input);

    expect(validationFn).toThrow();
  });

  it("should throw an error with a message that contains 'invalid number'", () => {
    const input = NaN;

    const validationFn = () => validateNumber(input);

    expect(validationFn).toThrow(/Invalid number/);
  });

  it("should not throw an error if a valid number is provided", () => {
    const input = 34;

    const validationFn = () => validateNumber(input);

    expect(validationFn).not.toThrow();
  });

  it("should throw an error if a string number is provided", () => {
    const input = "1";

    const validationFn = () => validateNumber(input);

    expect(validationFn).toThrow();
  });
});
