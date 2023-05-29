import { Validator } from "../Validator.js"
import { ErrorTracker } from "../ErrorTracker.js"
import { LowercaseLetterError } from "../errors/LowercaseLetterError.js"

export class LowercaseLetterValidator implements Validator {
  validate(password: string, tracker: ErrorTracker): boolean {
    let b = password.toUpperCase() !== password

    if (!b && tracker) {
      tracker.addError(new LowercaseLetterError())
    }

    return b
  }
}
