import { MissingColonError, UnterminatedObjectError } from "../errors";
import { isWhiteSpace } from "./checkers";
import { parseString } from "./parse-string";
import { parseValue } from "./parse-value";

export function parseObject(input: string, position: number): [object, number] {
    const obj: { [key: string]: any } = {};
    position++;
  
    while (position < input.length) {
      const char = input[position];
      if (char === '}') {
        position++;
        return [obj, position];
      } 
      else if (isWhiteSpace(char) || char === ',') {
        position++;
      } 
      else {
        const [key, newPos1] = parseString(input, position);
        position = newPos1;
        while (isWhiteSpace(input[position])) {
          position++;
        }

        if (input[position] !== ':') {
          throw new MissingColonError();
        }

        position++;
        
        while (isWhiteSpace(input[position])) {
          position++;
        }
        
        const [value, newPos2] = parseValue(input, position);
        position = newPos2;
        obj[key] = value;
      }
    }
  
    throw new UnterminatedObjectError();
  }