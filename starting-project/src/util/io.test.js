import { it, expect, vi } from "vitest";
import writeData from "./io.js";
import { promises as fs } from "fs";

vi.mock("fs");
/* This kicks off vitest's auto-mocking algorithm.
It'll find this module, and replace all the functions in there with empty spy functions */
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

it("should execute the writeFile method", () => {
  const testData = "test";
  const testFilename = "test.txt";

  writeData(testData, testFilename);

  // expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});

it("should return a promise that resolves to no value if called correctly", () => {
  const testData = "test";
  const testFilename = "test.txt";

  writeData(testData, testFilename);

  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});
