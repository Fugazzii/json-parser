# json-parser

To install dependencies:

```bash
bun install
```
- Parsing stringified JSON
```typescript
const jsonString = '{"name": "John", "age": 30, "isStudent": true, "city": null}';
const parsedData = JsonParser.parse(jsonString);

console.log("Parsed Data:");
console.log(parsedData);    
```
- Stringifying JSON
```typescript
const data = {
    name: "Alice",
    age: 25,
    isStudent: false,
    city: "New York",
    hobbies: ["Reading", "Hiking"],
};
        
const jsonStr = JsonParser.stringify(data);

console.log("\nJSON String:");
console.log(jsonStr);
```
To run:

```bash
bun run ./src/main.ts
```
