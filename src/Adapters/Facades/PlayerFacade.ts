import { IPlayerCreateDto } from '../../Application/Dto/IPlayerCreateDto'
import { PlayerAssignTeamUseCase } from '../../Application/UseCases/PlayerAssignTeamUseCase'
import { PlayerCreateUseCase } from '../../Application/UseCases/PlayerCreateUseCase'
import { PlayerGetUseCase } from '../../Application/UseCases/PlayerGetUseCase'
import { PlayerRemoveTeamUseCase } from '../../Application/UseCases/PlayerRemoveTeamUseCase'
import { TeamGetUseCase } from '../../Application/UseCases/TeamGetUseCase'
import { Player } from '../../Business/Entities/Domain/Player'
import { RepositoryFactory } from '../Factories/RepositoryFactory'
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
