import { DataNotFoundError } from '../../Errors'

export class PlayerNotFoundError extends DataNotFoundError {
  constructor() {
    super('Player not found.')
  }
}
