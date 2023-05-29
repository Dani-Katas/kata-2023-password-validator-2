import { describe, expect, it } from "vitest"
import { PasswordValidator } from "./PasswordValidator.js"

describe("validatePassword", () => {
  const passwordValidator = PasswordValidator.createValidation1()

  it("returns true if the password meets all the requirements", () => {
    const password = "Aa1_xxxxx"

    const result = passwordValidator.validate(password)

    expect(result).toBe(true)
  })

  describe("password is rejected", () => {
    it("if has less than 8 characters", () => {
      const password = "Aa1_xxxx"

      const result = passwordValidator.validate(password)

      expect(result).toBe(false)
    })

    it("if not has a capital letter", () => {
      const password = "aa1_xxxxx"

      const result = passwordValidator.validate(password)

      expect(result).toBe(false)
    })

    it("if not has a lowercase letter", () => {
      const password = "AA1_XXXXX"

      const result = passwordValidator.validate(password)

      expect(result).toBe(false)
    })

    it("if not has a number", () => {
      const password = "Aaa_xxxxx"

      const result = passwordValidator.validate(password)

      expect(result).toBe(false)
    })

    it("if not has a underscore", () => {
      const password = "Aa1xxxxxx"

      const result = passwordValidator.validate(password)

      expect(result).toBe(false)
    })
  })

  describe("validation 2", () => {
    it.each([
      ["Aa1_xxx", true],
      ["Aa1_xx", false],
      ["aa1_xxx", false],
      ["AA1_XXX", false],
      ["Aaa_xxx", false],
    ])(`password "%s" is %s`, (password, expected) => {
      const passwordValidator = PasswordValidator.createValidation2()

      const result = passwordValidator.validate(password)

      expect(result).toBe(expected)
    })
  })
})
