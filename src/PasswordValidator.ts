export class PasswordValidator {
  validate(password: string): boolean {
    if (this.doesNotHaveEnoughLength(password)) {
      return false
    }

    if (this.doesNotHaveCapitalLetter(password)) {
      return false
    }

    if (this.doesNotHaveLowercaseLetter(password)) {
      return false
    }

    return true
  }

  private doesNotHaveEnoughLength(password: string) {
    return password.length <= 8
  }

  private doesNotHaveLowercaseLetter(password: string) {
    return password.toUpperCase() === password
  }

  private doesNotHaveCapitalLetter(password: string) {
    return password.toLowerCase() === password
  }
}
