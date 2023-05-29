import { describe, expect, it } from "vitest"
import { PasswordValidator } from "./PasswordValidator.js"

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

    it("if not has a number", () => {
      const password = "Aaa_xxxxx"

      const result: boolean = passwordValidator.validate(password)

      expect(result).toBe(false)
    })
  })
})
