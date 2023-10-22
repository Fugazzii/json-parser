import { UnterminatedArrayError } from "../errors";
import { isWhiteSpace } from "./checkers";
import { parseValue } from "./parse-value";

export function parseArray(input: string, position: number): [any[], number] {
    const arr: any[] = [];
    position++;
  
    while (position < input.length) {
      const char = input[position];
      if (char === ']') {
        position++;
        return [arr, position];
      } 
      else if (isWhiteSpace(char) || char === ',') {
        position++;
      } 
      else {
        const [value, newPos] = parseValue(input, position);
        position = newPos;
        arr.push(value);
      }
    }
  
    throw new UnterminatedArrayError();
  }