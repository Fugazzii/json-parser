import { JsonParser } from "../lib";

export function Example1() {
    const jsonString = '{"name": "John", "age": 30, "isStudent": true, "city": null}';
    const parsedData = JsonParser.parse(jsonString);
    
    console.log("Parsed Data:");
    console.log(parsedData);    
}