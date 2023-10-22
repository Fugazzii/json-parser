import { JsonParser } from "./lib";

const jsonString = '{"name": "John", "age": 30, "isStudent": true, "city": null}';
const parsedData = JsonParser.parse(jsonString);

console.log(parsedData);