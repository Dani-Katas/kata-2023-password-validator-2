import { Validator } from "../Validator.js"

export class CapitalLetterValidator implements Validator {
  validate(password: string): boolean {
    return password.toLowerCase() !== password
  }
}
