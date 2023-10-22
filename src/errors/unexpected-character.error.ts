export class UnexpectedCharacter extends Error {
    public constructor() {
      super("Invalid JSON: Unexpected character");
      this.name = "UnexpectedCharacter";
    }
  }
  