import { Validator } from "../Validator.js"
import { ErrorTracker } from "../ErrorTracker.js"
import { LengthValidationError } from "../errors/LengthValidationError.js"

export class LengthValidator implements Validator {
  constructor(private readonly minLength: number) {}

  validate(password: string, tracker: ErrorTracker): boolean {
    let isValid = password.length > this.minLength

    if (!isValid && tracker) {
      tracker.addError(new LengthValidationError(this.minLength))
    }

    return isValid
  }
}
