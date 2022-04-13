import { DataNotFoundError } from '../../Errors'

export class TeamNotFoundError extends DataNotFoundError {
  constructor() {
    super('Team not found.')
  }
}
