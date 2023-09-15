import { validateNumber, validateStringNotEmpty } from "./validation.js";

export function transformToNumber(value) {
  return +value;
}

export function cleanNumbers(numberValues) {
  const numbers = [];
  for (const num of numberValues) {
    validateStringNotEmpty(num);
    const number = transformToNumber(num);
    validateNumber(number);
    numbers.push(number);
  }

  return numbers;
}
