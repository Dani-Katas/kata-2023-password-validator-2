export class PasswordValidator {
  validate(password: string): boolean {
    if (password.length <= 8) {
      return false
    }

    if (password.toLowerCase() === password) {
      return false
    }

    if (password.toUpperCase() === password) {
      return false
    }

    return true
  }
}
