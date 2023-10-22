export class UnterminatedStringError extends Error {
    constructor() {
      super("Invalid JSON: Unterminated string");
      this.name = "UnterminatedStringError";
    }
  }
  