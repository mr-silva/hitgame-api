import { Player } from '../Entities/Domain/Player'
import { IPlayerCreateDto } from '../Entities/Dto/IPlayerCreateDto'
import { RepositoryFactory } from '../Factories/RepositoryFactory'
import { PlayerCreateUseCase } from '../UseCases/PlayerCreateUseCase'
import { PlayerGetUseCase } from '../UseCases/PlayerGetUseCase'
import { TeamGetUseCase } from '../UseCases/TeamGetUseCase'
import { PlayerValidator } from '../Validators/PlayerValidator'

export class PlayerFacade {
  constructor(private readonly repositoryFactory: RepositoryFactory) {}

  public async getOneById(id: string): Promise<Player> {
    const playerGetUseCase = new PlayerGetUseCase(this.repositoryFactory.buildPlayerRepository())

    return playerGetUseCase.execute(id)
  }

  public async post(payload: IPlayerCreateDto): Promise<Player> {
    const playerCreateUseCase = new PlayerCreateUseCase(
      this.repositoryFactory.buildPlayerRepository(),
      new TeamGetUseCase(this.repositoryFactory.buildTeamRepository()),
      new PlayerValidator()
    )

    return playerCreateUseCase.execute(payload)
  }
}
