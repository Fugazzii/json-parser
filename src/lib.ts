import { parseValue } from "./functions/parse-value";
import { stringify } from "./functions/stringify";

export class JsonParser {
    public static parse(input: string): any {
        const [result] = parseValue(input, 0);
        return result;
    }
    
    public static stringify(input: any): string {
        return stringify(input);
    }
}