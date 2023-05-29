import { ValidationError } from "./ValidationError.js"

export class ErrorTracker {
  private errors: ValidationError[] = []

  pullErrors() {
    return this.errors
  }

  addError(validationError: ValidationError) {
    this.errors.push(validationError)
  }
}
