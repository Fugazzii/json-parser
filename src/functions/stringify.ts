import { InvalidJsonError } from "../errors/invalid-json.error";

export function stringify(data: any): string {
    if (data === null) {
      return "null";
    } 
    else if (typeof data === "string") {
      return `"${data}"`;
    }
    else if (typeof data === "number" || typeof data === "boolean") {
      return data.toString();
    } 
    else if (Array.isArray(data)) {
      const items = data.map(item => stringify(item));
      return `[${items.join(", ")}]`;
    } 
    else if (typeof data === "object") {
      const properties = Object.keys(data).map((key: string) => {
        const value: any = stringify(data[key]);
        return `"${key}": ${value}`;
      });
      return `{${properties.join(", ")}}`;
    } else {
      throw new InvalidJsonError();
    }
  }
  