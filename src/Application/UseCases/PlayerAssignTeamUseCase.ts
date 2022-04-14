import { IRepositoryInterface } from '../../Adapters/Interfaces/IRepositotyInterface'
import { PlayerAlreadyHasTeamError } from '../../Business/Entities/Domain/Errors/PlayerAlreadyHasTeamError'
import { Player } from '../../Business/Entities/Domain/Player'
import { TeamGetUseCase } from './TeamGetUseCase'

export class PlayerAssignTeamUseCase {
  constructor(
    private readonly playerRepository: IRepositoryInterface<Player>,
    private readonly teamGetUseCase: TeamGetUseCase
  ) {}

  public async execute(id: string, teamId: string): Promise<void> {
    const player = await this.playerRepository.getOneById(id)

    const team = await this.teamGetUseCase.execute(teamId)

    if (player.getTeam() && player.getTeam().getId() !== teamId)
      throw new PlayerAlreadyHasTeamError()

    player.setTeam(team)

    await this.playerRepository.save(player)
  }
}
