import { it, expect, vi } from "vitest";
import writeData from "./io.js";
import { promises as fs } from "fs";

vi.mock("fs");
/* This kicks off vitest's auto-mocking algorithm.
It'll find this module, and replace all the functions in there with empty spy functions */

it("should execute the writeFile method", () => {
  const testData = "test";
  const testFilename = "test.txt";

  writeData(testData, testFilename);

  /* return expect(writeData(testData, testFilename)).resolves.toBeUndefined(); */
  expect(fs.writeFile).toBeCalled();
});
