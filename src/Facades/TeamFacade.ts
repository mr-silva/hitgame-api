import { Team } from '../Entities/Domain/Team'
import { ITeamCreateDto } from '../Entities/Dto/ITeamCreateDto'
import { RepositoryFactory } from '../Factories/RepositoryFactory'
import { TeamCreateUseCase } from '../UseCases/TeamCreateUseCase'
import { TeamGetUseCase } from '../UseCases/TeamGetUseCase'
import { TeamValidator } from '../Validators/TeamValidator'

export class TeamFacade {
  constructor(private readonly repositoryFactory: RepositoryFactory) {}

  public async getOneById(id: string): Promise<Team> {
    const teamGetUseCase = new TeamGetUseCase(this.repositoryFactory.buildTeamRepository())

    return teamGetUseCase.execute(id)
  }

  public async create(payload: ITeamCreateDto): Promise<Team> {
    const teamCreateUseCase = new TeamCreateUseCase(
      this.repositoryFactory.buildTeamRepository(),
      new TeamValidator()
    )

    return teamCreateUseCase.execute(payload)
  }
}
