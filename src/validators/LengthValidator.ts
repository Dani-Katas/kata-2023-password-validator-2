import { Validator } from "../Validator.js"

export class LengthValidator implements Validator {
  constructor(private readonly minLength: number = 8) {}

  validate(password: string): boolean {
    return password.length > this.minLength
  }
}
