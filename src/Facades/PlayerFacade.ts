import { Player } from '../Entities/Domain/Player'
import { IPlayerCreateDto } from '../Entities/Dto/IPlayerCreateDto'
import { RepositoryFactory } from '../Factories/RepositoryFactory'
import { PlayerAssignTeamUseCase } from '../UseCases/PlayerAssignTeamUseCase'
import { PlayerCreateUseCase } from '../UseCases/PlayerCreateUseCase'
import { PlayerGetUseCase } from '../UseCases/PlayerGetUseCase'
import { PlayerRemoveTeamUseCase } from '../UseCases/PlayerRemoveTeamUseCase'
import { TeamGetUseCase } from '../UseCases/TeamGetUseCase'
import { PlayerValidator } from '../Validators/PlayerValidator'

export class PlayerFacade {
  constructor(private readonly repositoryFactory: RepositoryFactory) {}

  public async getOneById(id: string): Promise<Player> {
    const playerGetUseCase = new PlayerGetUseCase(this.repositoryFactory.buildPlayerRepository())

    return playerGetUseCase.execute(id)
  }

  public async create(payload: IPlayerCreateDto): Promise<Player> {
    const playerCreateUseCase = new PlayerCreateUseCase(
      this.repositoryFactory.buildPlayerRepository(),
      new PlayerValidator()
    )

    return playerCreateUseCase.execute(payload)
  }

  public async assignTeam(id: string, teamId: string): Promise<void> {
    const playerAssignTeamUseCase = new PlayerAssignTeamUseCase(
      this.repositoryFactory.buildPlayerRepository(),
      new TeamGetUseCase(this.repositoryFactory.buildTeamRepository())
    )

    await playerAssignTeamUseCase.execute(id, teamId)
  }

  public async removeTeam(id: string): Promise<void> {
    const playerRemoveTeamUseCase = new PlayerRemoveTeamUseCase(
      this.repositoryFactory.buildPlayerRepository()
    )

    await playerRemoveTeamUseCase.execute(id)
  }
}
