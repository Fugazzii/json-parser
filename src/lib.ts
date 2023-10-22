import { parseValue } from "./functions/parse-value";

export class JsonParser {
    public static parse(input: string) {
        const [result] = parseValue(input, 0);
        return result;
    }
    
    public static stringify() {}
}