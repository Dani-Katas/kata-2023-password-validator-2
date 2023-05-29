import { Validator } from "../Validator.js"

export class NumberValidator implements Validator {
  validate(password: string): boolean {
    return password.match(/\d/) !== null
  }
}
