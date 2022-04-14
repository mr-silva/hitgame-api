import { PlayerRepository } from '../Repositories/PlayerRepository'

export class PlayerRemoveTeamUseCase {
  constructor(private readonly playerRepository: PlayerRepository) {}

  public async execute(id: string): Promise<void> {
    const player = await this.playerRepository.getOneById(id)

    player.setTeam(null)

    console.log(player)

    await this.playerRepository.save(player)
  }
}
