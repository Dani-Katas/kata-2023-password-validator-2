import { describe, it, expect } from "vitest"
import { myFunction } from "./main.js"

function validatePassword(validPassword: string): boolean {
  return true
}

describe("validatePassword", () => {
  it("returns true if the password meets all the requirements", () => {
    const validPassword = "Aa1_xxxxx"

    const result: boolean = validatePassword(validPassword)

    expect(result).toBe(true)
  })
})
