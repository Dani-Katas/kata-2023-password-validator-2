import { ValidationError } from "../ValidationError.js"

export class UnderscoreError extends ValidationError {
  constructor() {
    super("Password must contain at least one underscore")
  }
}
