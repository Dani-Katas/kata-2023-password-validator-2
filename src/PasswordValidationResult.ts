import { ValidationError } from "./ValidationError.js"

export class PasswordValidationResult {
  constructor(public readonly isValid: boolean, public readonly errors: ValidationError[]) {}
}
