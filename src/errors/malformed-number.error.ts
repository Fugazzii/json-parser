export class MalformedNumberError extends Error {
    public constructor() {
      super("Invalid JSON: Malformed number");
      this.name = "MalformedNumberError";
    }
  }
  