import { ErrorTracker } from "./ErrorTracker.js"

export interface Validator {
  validate(password: string, tracker?: ErrorTracker): boolean
}
