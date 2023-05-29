import { Validator } from "./Validator.js"
import { LengthValidator } from "./validators/LengthValidator.js"
import { CapitalLetterValidator } from "./validators/CapitalLetterValidator.js"
import { LowercaseLetterValidator } from "./validators/LowercaseLetterValidator.js"
import { NumberValidator } from "./validators/NumberValidator.js"
import { UnderscoreValidator } from "./validators/UnderscoreValidator.js"

export class PasswordValidator {
  static createValidation1(): PasswordValidator {
    return new PasswordValidator([
      new LengthValidator(),
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

  constructor(private validators: Validator[] = []) {}

  validate(password: string): boolean {
    return this.validators.every((validator) => validator.validate(password))
  }
}
