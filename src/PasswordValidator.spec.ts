import { describe, expect, it } from "vitest"
import { PasswordValidator } from "./PasswordValidator.js"
import { LengthValidationError } from "./errors/LengthValidationError.js"
import { CapitalLetterError } from "./errors/CapitalLetterError.js"
import { LowercaseLetterError } from "./errors/LowercaseLetterError.js"
import { NumberError } from "./errors/NumberError.js"
import { UnderscoreError } from "./errors/UnderscoreError.js"
import { PasswordValidationResult } from "./PasswordValidationResult.js"

describe("validatePassword", () => {
  const passwordValidator = PasswordValidator.createValidation1()

  it("returns true if the password meets all the requirements", () => {
    const password = "Aa1_xxxxx"

    const { errors } = passwordValidator.validate(password)

    expect(errors).toEqual([])
  })

  describe("password is rejected", () => {
    it("if has less than 8 characters", () => {
      const password = "Aa1_xxxx"

      const { errors } = passwordValidator.validate(password)

      expect(errors[0]).toBeInstanceOf(LengthValidationError)
    })

    it("if not has a capital letter", () => {
      const password = "aa1_xxxxx"

      const { errors } = passwordValidator.validate(password)

      expect(errors[0]).toBeInstanceOf(CapitalLetterError)
    })

    it("if not has a lowercase letter", () => {
      const password = "AA1_XXXXX"

      const { errors } = passwordValidator.validate(password)

      expect(errors[0]).toBeInstanceOf(LowercaseLetterError)
    })

    it("if not has a number", () => {
      const password = "Aaa_xxxxx"

      const { errors } = passwordValidator.validate(password)

      expect(errors[0]).toBeInstanceOf(NumberError)
    })

    it("if not has a underscore", () => {
      const password = "Aa1xxxxxx"

      const { errors } = passwordValidator.validate(password)

      expect(errors[0]).toBeInstanceOf(UnderscoreError)
    })

    it("returns multiple validation errors", () => {
      const password = ""

      const { errors } = passwordValidator.validate(password)

      expect(errors).toEqual([
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
      ["Aa1_xxx", null],
      ["Aa1_xx", LengthValidationError],
      ["aa1_xxx", CapitalLetterError],
      ["AA1_XXX", LowercaseLetterError],
      ["Aaa_xxx", NumberError],
    ])(`password "%s" is %s`, (password, expected) => {
      const passwordValidator = PasswordValidator.createValidation2()

      const result = passwordValidator.validate(password)

      expectResultHasError(result, expected)
    })
  })

  describe("validation 3", () => {
    it.each([
      ["Aa1_xxxxxxxxxxxxx", null],
      ["Aa1_xxxxxxxxxxxx", LengthValidationError],
      ["aa1_xxxxxxxxxxxxx", CapitalLetterError],
      ["AA1_XXXXXXXXXXXXX", LowercaseLetterError],
      ["Aaa_xxxxxxxxxxxxx", NumberError],
    ])(`password "%s" is %s`, (password, expected) => {
      const passwordValidator = PasswordValidator.createValidation3()

      const result = passwordValidator.validate(password)

      expectResultHasError(result, expected)
    })
  })

  it("passes validation with just one error", () => {
    const passwordWithOneError = "aa1_xxxxx"

    const result = passwordValidator.validate(passwordWithOneError)

    expect(result.isValid).toBe(true)
  })

  it("fails with more than one error", () => {
    const passwordWithOneError = "aaa_xxxxx"

    const result = passwordValidator.validate(passwordWithOneError)

    expect(result.isValid).toBe(false)
  })
})
function expectResultHasError(result: PasswordValidationResult, expected: any) {
  let error = result.errors[0]

  if (!error && !expected) {
    return
  }

  expect(error).toBeInstanceOf(expected)
}
