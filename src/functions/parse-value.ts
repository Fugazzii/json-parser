import { UnexpectedCharacter } from "../errors";
import { isWhiteSpace, isDigit } from "./checkers";
import { parseArray } from "./parse-array";
import { parseNumber } from "./parse-number";
import { parseObject } from "./parse-object";
import { parseString } from "./parse-string";

export function parseValue(input: string, position: number): [any, number] {
    while (isWhiteSpace(input[position])) {
      position++;
    }
  
    const char = input[position];
  
    if (char === `"`) {
      return parseString(input, position);
    }
    else if (isDigit(char) || char === `-`) {
      return parseNumber(input, position);  
    }
    else if (char === `t` && input.slice(position, position + 4) === `true`) {
      return [true, position + 4];
    }
    else if (char === `f` && input.slice(position, position + 5) === `false`) {
      return [false, position + 5];
    }
    else if (char === `n` && input.slice(position, position + 4) === `null`) {
      return [null, position + 4];
    }
    else if (char === '{') {
      return parseObject(input, position);
    } 
    else if (char === '[') {
      return parseArray(input, position);
    }
  
    throw new UnexpectedCharacter();
}
