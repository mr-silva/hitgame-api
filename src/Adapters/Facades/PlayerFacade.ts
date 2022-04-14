import { IPlayerCreateDto } from '../../Application/Dto/IPlayerCreateDto'
import { PlayerAssignTeamUseCase } from '../../Application/UseCases/PlayerAssignTeamUseCase'
import { PlayerCreateUseCase } from '../../Application/UseCases/PlayerCreateUseCase'
import { PlayerGetListUseCase } from '../../Application/UseCases/PlayerGetListUseCase'
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

  public async getAll(): Promise<Player[]> {
    const playerGetListUseCase = new PlayerGetListUseCase(
      this.repositoryFactory.buildPlayerRepository()
    )

    return playerGetListUseCase.execute()
  }

  public async create(payload: IPlayerCreateDto): Promise<Player> {
    const playerCreateUseCase = new PlayerCreateUseCase(
      this.repositoryFactory.buildPlayerRepository(),
      new PlayerValidator()
    )

    return playerCreateUseCase.execute(payload)
  }

  public async assignTeam(id: string, teamId: string): Promise<Player> {
    const playerAssignTeamUseCase = new PlayerAssignTeamUseCase(
      this.repositoryFactory.buildPlayerRepository(),
      new TeamGetUseCase(this.repositoryFactory.buildTeamRepository())
    )

    return playerAssignTeamUseCase.execute(id, teamId)
  }

  public async removeTeam(id: string): Promise<Player> {
    const playerRemoveTeamUseCase = new PlayerRemoveTeamUseCase(
      this.repositoryFactory.buildPlayerRepository()
    )

    return playerRemoveTeamUseCase.execute(id)
  }
}
