import { Validator } from "../Validator.js"
import { ErrorTracker } from "../ErrorTracker.js"
import { NumberError } from "../errors/NumberError.js"

export class NumberValidator implements Validator {
  validate(password: string, tracker: ErrorTracker): void {
    let isValid = password.match(/\d/) !== null

    if (!isValid) {
      tracker.addError(new NumberError())
    }
  }
}
