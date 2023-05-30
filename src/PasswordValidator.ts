import { Validator } from "./Validator.js"
import { LengthValidator } from "./validators/LengthValidator.js"
import { CapitalLetterValidator } from "./validators/CapitalLetterValidator.js"
import { LowercaseLetterValidator } from "./validators/LowercaseLetterValidator.js"
import { NumberValidator } from "./validators/NumberValidator.js"
import { UnderscoreValidator } from "./validators/UnderscoreValidator.js"
import { ErrorTracker } from "./ErrorTracker.js"
import { PasswordValidationResult } from "./PasswordValidationResult.js"

export class PasswordValidator {
  static createValidation1(): PasswordValidator {
    return new PasswordValidator([
      new LengthValidator(8),
      new CapitalLetterValidator(),
      new LowercaseLetterValidator(),
      new NumberValidator(),
      new UnderscoreValidator(),
    ])
  }

  static createValidation2() {
    return new PasswordValidator([
      new LengthValidator(6),
      new CapitalLetterValidator(),
      new LowercaseLetterValidator(),
      new NumberValidator(),
    ])
  }

  static createValidation3() {
    return new PasswordValidator([
      new LengthValidator(16),
      new CapitalLetterValidator(),
      new LowercaseLetterValidator(),
      new NumberValidator(),
    ])
  }

  private errorLimit = 1

  constructor(private validators: Validator[] = []) {}

  validate(password: string): PasswordValidationResult {
    const tracker = new ErrorTracker()

    this.validators.forEach((validator) => validator.validate(password, tracker))

    const validationErrors = tracker.pullErrors()

    return new PasswordValidationResult(validationErrors.length <= this.errorLimit, validationErrors)
  }
}
