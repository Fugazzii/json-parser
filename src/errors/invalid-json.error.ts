export class InvalidJsonError extends Error {
    public constructor() {
      super("Invalid data type for JSON serialization");
      this.name = "InvalidJsonError";
    }
  }
  