import { Player } from '../Entities/Domain/Player'
import { PlayerRepository } from '../Repositories/PlayerRepository'

export class PlayerGetUseCase {
  constructor(private readonly playerRepository: PlayerRepository) {}

  public async execute(id: string): Promise<Player> {
    return await this.playerRepository.getOneById(id)
  }
}
