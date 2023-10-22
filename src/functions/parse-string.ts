import { UnterminatedStringError } from "../errors/unterminated-string.error";

export function parseString(input: string, pos: number): [string, number] {
    let result = "";
    pos += 1;

    while(pos < input.length) {
        const char = input[pos];

        if(char === `"`) {
            pos += 1;
            return [result, pos];
        }

        result += char;
        pos += 1;
    }

    throw new UnterminatedStringError();
}