export class UnterminatedArrayError extends Error {
    public constructor() {
      super("Invalid JSON: Unterminated array");
      this.name = "UnterminatedArrayError";
    }
  }
  