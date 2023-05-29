import { Validator } from "../Validator.js"
import { ErrorTracker } from "../ErrorTracker.js"
import { CapitalLetterError } from "../errors/CapitalLetterError.js"

export class CapitalLetterValidator implements Validator {
  validate(password: string, tracker: ErrorTracker): boolean {
    let isValid = password.toLowerCase() !== password

    if (!isValid && tracker) {
      tracker.addError(new CapitalLetterError())
    }

    return isValid
  }
}
