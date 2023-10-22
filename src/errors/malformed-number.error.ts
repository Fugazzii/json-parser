export class MalformedNumberError extends Error {
    constructor() {
      super("Invalid JSON: Malformed number");
      this.name = "MalformedNumberError";
    }
  }
  