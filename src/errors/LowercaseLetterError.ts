import { ValidationError } from "../ValidationError.js"

export class LowercaseLetterError extends ValidationError {
  constructor() {
    super("Password must contain at least one lowercase letter")
  }
}
