export class MissingColonError extends Error {
    public constructor() {
      super("Invalid JSON: Expected ':' in object");
      this.name = "MissingColonError";
    }
  }
  