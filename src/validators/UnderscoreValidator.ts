import { Validator } from "../Validator.js"

export class UnderscoreValidator implements Validator {
  validate(password: string): boolean {
    return password.includes("_")
  }
}
