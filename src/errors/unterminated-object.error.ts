export class UnterminatedObjectError extends Error {
    public constructor() {
      super("Invalid JSON: Unterminated object");
      this.name = "UnterminatedObjectError";
    }
  }
  