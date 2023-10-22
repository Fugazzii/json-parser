export class UnexpectedCharacter extends Error {
    constructor() {
      super("Invalid JSON: Unexpected character");
      this.name = "UnexpectedCharacter";
    }
  }
  