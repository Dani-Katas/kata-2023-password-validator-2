import { Validator } from "../Validator.js"
import { ErrorTracker } from "../ErrorTracker.js"
import { LowercaseLetterError } from "../errors/LowercaseLetterError.js"

export class LowercaseLetterValidator implements Validator {
  validate(password: string, tracker: ErrorTracker): void {
    let isValid = password.toUpperCase() !== password

    if (!isValid) {
      tracker.addError(new LowercaseLetterError())
    }
  }
}
