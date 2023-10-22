export class UnterminatedStringError extends Error {
    public constructor() {
      super("Invalid JSON: Unterminated string");
      this.name = "UnterminatedStringError";
    }
  }
  