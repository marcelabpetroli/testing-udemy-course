import { expect, it } from "vitest";
import { validateNotEmpty } from "./validation";

it("should throw an error if an empty string is provided", () => {
  const text = "";

  const validateFn = () => validateNotEmpty(text);

  expect(validateFn).toThrow();
});

it("should throw an error if a string with blank spaces is provided", () => {
  const text = "  ";

  const validateFn = () => validateNotEmpty(text);

  expect(validateFn).toThrow();
});

it("should throw an error message with the provided error message", () => {
  const text = "";
  const errorMessage = "Error!";

  const validateFn = () => validateNotEmpty(text, errorMessage);

  expect(validateFn).toThrow(errorMessage);
});
