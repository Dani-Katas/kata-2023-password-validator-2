import { Validator } from "../Validator.js"

export class LowercaseLetterValidator implements Validator {
  validate(password: string): boolean {
    return password.toUpperCase() !== password
  }
}
