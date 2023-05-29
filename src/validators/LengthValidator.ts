import { Validator } from "../Validator.js"

export class LengthValidator implements Validator {
  constructor(private readonly minLength: number) {}

  validate(password: string): boolean {
    return password.length > this.minLength
  }
}
