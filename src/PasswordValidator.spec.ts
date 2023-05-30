import { describe, expect, it } from "vitest"
import { PasswordValidator } from "./PasswordValidator.js"
import { LengthValidationError } from "./errors/LengthValidationError.js"
import { CapitalLetterError } from "./errors/CapitalLetterError.js"
import { LowercaseLetterError } from "./errors/LowercaseLetterError.js"
import { NumberError } from "./errors/NumberError.js"
import { UnderscoreError } from "./errors/UnderscoreError.js"
import { ValidationError } from "./ValidationError.js"

describe("validatePassword", () => {
  const passwordValidator = PasswordValidator.createValidation1()

  it("returns true if the password meets all the requirements", () => {
    const password = "Aa1_xxxxx"

    const result = passwordValidator.validate(password)

    expect(result).toEqual([])
  })

  describe("password is rejected", () => {
    it("if has less than 8 characters", () => {
      const password = "Aa1_xxxx"

      const result = passwordValidator.validate(password)

      expect(result[0]).toBeInstanceOf(LengthValidationError)
    })

    it("if not has a capital letter", () => {
      const password = "aa1_xxxxx"

      const result = passwordValidator.validate(password)

      expect(result[0]).toBeInstanceOf(CapitalLetterError)
    })

    it("if not has a lowercase letter", () => {
      const password = "AA1_XXXXX"

      const result = passwordValidator.validate(password)

      expect(result[0]).toBeInstanceOf(LowercaseLetterError)
    })

    it("if not has a number", () => {
      const password = "Aaa_xxxxx"

      const result = passwordValidator.validate(password)

      expect(result[0]).toBeInstanceOf(NumberError)
    })

    it("if not has a underscore", () => {
      const password = "Aa1xxxxxx"

      const result = passwordValidator.validate(password)

      expect(result[0]).toBeInstanceOf(UnderscoreError)
    })

    it("returns multiple validation errors", () => {
      const password = ""

      const result = passwordValidator.validate(password)

      expect(result).toEqual([
        new LengthValidationError(8),
        new CapitalLetterError(),
        new LowercaseLetterError(),
        new NumberError(),
        new UnderscoreError(),
      ])
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

      const result = hasErrors(passwordValidator.validate(password))

      expect(result).toBe(expected)
    })
  })

  describe("validation 3", () => {
    it.each([
      ["Aa1_xxxxxxxxxxxxx", true],
      ["Aa1_xxxxxxxxxxxx", false],
      ["aa1_xxxxxxxxxxxxx", false],
      ["AA1_XXXXXXXXXXXXX", false],
      ["Aaa_xxxxxxxxxxxxx", false],
    ])(`password "%s" is %s`, (password, expected) => {
      const passwordValidator = PasswordValidator.createValidation3()

      const result = hasErrors(passwordValidator.validate(password))

      expect(result).toBe(expected)
    })
  })
})

export function hasErrors(validationErrors: ValidationError[]) {
  return validationErrors.length === 0
}
