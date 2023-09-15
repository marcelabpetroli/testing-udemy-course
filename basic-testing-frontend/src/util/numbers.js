import { cleanNumbers, add } from "../math.js";

export function transformToNumber(value) {
  return +value;
}

export function calculateResult(numberValues) {
  let result;
  try {
    const numbers = cleanNumbers(numberValues);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}
