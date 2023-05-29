import { Validator } from "../Validator.js"
import { ErrorTracker } from "../ErrorTracker.js"
import { UnderscoreError } from "../errors/UnderscoreError.js"

export class UnderscoreValidator implements Validator {
  validate(password: string, tracker?: ErrorTracker): boolean {
    let isValid = password.includes("_")

    if (!isValid && tracker) {
      tracker.addError(new UnderscoreError())
    }

    return isValid
  }
}
