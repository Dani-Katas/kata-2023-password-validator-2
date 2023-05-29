import { Validator } from "../Validator.js"

export class LengthValidator implements Validator {
  validate(password: string): boolean {
    return password.length > 8
  }
}
