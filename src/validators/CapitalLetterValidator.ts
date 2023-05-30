import { Validator } from "../Validator.js"
import { ErrorTracker } from "../ErrorTracker.js"
import { CapitalLetterError } from "../errors/CapitalLetterError.js"

export class CapitalLetterValidator implements Validator {
  validate(password: string, tracker: ErrorTracker): void {
    let isValid = password.toLowerCase() !== password

    if (!isValid) {
      tracker.addError(new CapitalLetterError())
    }
  }
}
