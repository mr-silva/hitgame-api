import { Player } from '../../Business/Entities/Domain/Player'
import { IRepositoryInterface } from '../Interfaces/IRepositotyInterface'

export class PlayerRemoveTeamUseCase {
  constructor(private readonly playerRepository: IRepositoryInterface<Player>) {}

  public async execute(id: string): Promise<void> {
    const player = await this.playerRepository.getOneById(id)

    player.setTeam(null)

    await this.playerRepository.save(player)
  }
}
