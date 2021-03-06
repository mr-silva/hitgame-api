import { PlayerAlreadyHasTeamError } from '../../Business/Entities/Domain/Errors/PlayerAlreadyHasTeamError'
import { Player } from '../../Business/Entities/Domain/Player'
import { IRepositoryInterface } from '../Interfaces/IRepositotyInterface'
import { TeamGetUseCase } from './TeamGetUseCase'

export class PlayerAssignTeamUseCase {
  constructor(
    private readonly playerRepository: IRepositoryInterface<Player>,
    private readonly teamGetUseCase: TeamGetUseCase
  ) {}

  public async execute(id: string, teamId: string): Promise<Player> {
    const player = await this.playerRepository.getOneById(id)

    const team = await this.teamGetUseCase.execute(teamId)

    if (player.getTeam() && player.getTeam().getId() !== teamId)
      throw new PlayerAlreadyHasTeamError()

    player.setTeam(team)

    return this.playerRepository.save(player)
  }
}
