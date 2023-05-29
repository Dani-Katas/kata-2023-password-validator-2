import { ValidationError } from "../ValidationError.js"

export class NumberError extends ValidationError {
  constructor() {
    super("Password must contain at least one number")
  }
}
