import { MalformedNumberError } from "../errors";
import { isDigit } from "./checkers";

export function parseNumber(input: string, position: number): [number, number] {
    let start = position;
    while (isDigit(input[position]) || input[position] === '.') {
      position++;
    }
    const numStr = input.slice(start, position);
    const parsedNum = parseFloat(numStr);
  
    if (isNaN(parsedNum)) {
      throw new MalformedNumberError();
    }
  
    return [parsedNum, position];
}