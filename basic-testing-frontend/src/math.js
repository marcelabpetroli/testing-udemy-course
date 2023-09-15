import { validateNumber, validateStringNotEmpty } from "./util/validation.js";
import { transformToNumber } from "./util/numbers.js";

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
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
