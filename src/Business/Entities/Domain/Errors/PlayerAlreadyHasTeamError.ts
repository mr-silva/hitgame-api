import { AlreadyExistsError } from '../../../Errors'

export class PlayerAlreadyHasTeamError extends AlreadyExistsError {
  constructor() {
    super('Player already assigned to a team.')
  }
}
