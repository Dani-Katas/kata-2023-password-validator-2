import { describe, it, expect } from "vitest"
import { myFunction } from "./main.js"

function validatePassword(password: string): boolean {
  if (password.length <= 8) {
    return false
  }

  return true
}

describe("validatePassword", () => {
  it("returns true if the password meets all the requirements", () => {
    const validPassword = "Aa1_xxxxx"

    const result: boolean = validatePassword(validPassword)

    expect(result).toBe(true)
  })

  describe("password is rejected", () => {
    it("if has less than 8 characters", () => {
      const validPassword = "Aa1_xxxx"

      const result: boolean = validatePassword(validPassword)

      expect(result).toBe(false)
    })
  })
})
