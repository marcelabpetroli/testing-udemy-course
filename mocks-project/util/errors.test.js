import { describe, expect, it } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("HttpError()", () => {
  it("should container the provided status code, message and data", () => {
    const statusCode = 12;
    const message = "test";
    const data = { key: "data" };

    const error = new HttpError(statusCode, message, data);

    expect(error.statusCode).toBe(statusCode);
    expect(error.message).toBe(message);
    expect(error.data).toBe(data);
  });

  it("should contain undefined as data if no data is provided", () => {
    const statusCode = 12;
    const message = "test";

    const error = new HttpError(statusCode, message);

    expect(error.data).toBeUndefined;
  });
});

describe("ValidationError()", () => {
  it("should contain the provided message", () => {
    const message = "test";

    const error = new ValidationError(message);

    expect(error.message).toBe(message);
  });
});
