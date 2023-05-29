import { describe, expect, it } from "vitest"

class PasswordValidator {
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

describe("validatePassword", () => {
  const passwordValidator = new PasswordValidator()

  it("returns true if the password meets all the requirements", () => {
    const password = "Aa1_xxxxx"

    const result: boolean = passwordValidator.validate(password)

    expect(result).toBe(true)
  })

  describe("password is rejected", () => {
    it("if has less than 8 characters", () => {
      const password = "Aa1_xxxx"

      const result: boolean = passwordValidator.validate(password)

      expect(result).toBe(false)
    })

    it("if not has a capital letter", () => {
      const password = "aa1_xxxxx"

      const result: boolean = passwordValidator.validate(password)

      expect(result).toBe(false)
    })

    it("if not has a lowercase letter", () => {
      const password = "AA1_XXXXX"

      const result: boolean = passwordValidator.validate(password)

      expect(result).toBe(false)
    })
  })
})
