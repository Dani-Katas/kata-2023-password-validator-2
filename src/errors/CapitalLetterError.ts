import { ValidationError } from "../ValidationError.js"

export class CapitalLetterError extends ValidationError {
  constructor() {
    super("Password must contain at least one capital letter")
  }
}
