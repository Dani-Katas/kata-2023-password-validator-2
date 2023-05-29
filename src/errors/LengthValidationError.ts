import { ValidationError } from "../ValidationError.js"

export class LengthValidationError extends ValidationError {
  constructor(minLength: number) {
    super(`Password must be at least ${minLength} characters long`)
  }
}
