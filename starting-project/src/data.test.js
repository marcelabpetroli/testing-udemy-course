import { describe, it, vi, expect } from "vitest";
import { generateReportData } from "./data.js";

describe("generateReportData()", () => {
  it("should execute logFn if provided", () => {
    // fn creates an empty function, which keeps track of any function executions of that function
    // including the arguments that were provided in the calls
    const logger = vi.fn();

    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});
