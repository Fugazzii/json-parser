import { JsonParser } from "../lib";

export function Example2() {
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
}
