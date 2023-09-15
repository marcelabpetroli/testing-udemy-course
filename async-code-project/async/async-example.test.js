import { describe, it, expect } from "vitest";
import { generateTokenPromise } from "./async-example";

describe("generateTokenPromise()", () => {
  it("should generate a token value", () => {
    const testUserEmail = "test@email.com";

    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  });

  it("should generate a token value", async () => {
    const testUserEmail = "test@email.com";

    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBeDefined();
  });
});
