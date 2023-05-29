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

    if (this.doesNotHaveNumber(password)) {
      return false
    }

    if (this.doesNotHaveUnderscore(password)) {
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

  private doesNotHaveNumber(password: string) {
    return password.match(/\d/) === null
  }

  private doesNotHaveUnderscore(password: string) {
    return !password.includes("_")
  }
}
