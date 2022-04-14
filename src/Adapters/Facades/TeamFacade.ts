import { ITeamCreateDto } from '../../Application/Dto/ITeamCreateDto'
import { TeamCreateUseCase } from '../../Application/UseCases/TeamCreateUseCase'
import { TeamGetListUseCase } from '../../Application/UseCases/TeamGetListUseCase'
import { TeamGetUseCase } from '../../Application/UseCases/TeamGetUseCase'
import { Team } from '../../Business/Entities/Domain/Team'
import { RepositoryFactory } from '../Factories/RepositoryFactory'
import { TeamValidator } from '../Validators/TeamValidator'

export class TeamFacade {
  constructor(private readonly repositoryFactory: RepositoryFactory) {}

  public async getOneById(id: string): Promise<Team> {
    const teamGetUseCase = new TeamGetUseCase(this.repositoryFactory.buildTeamRepository())

    return teamGetUseCase.execute(id)
  }

  public async getAll(): Promise<Team[]> {
    const teamGetListUseCase = new TeamGetListUseCase(this.repositoryFactory.buildTeamRepository())

    return teamGetListUseCase.execute()
  }

  public async create(payload: ITeamCreateDto): Promise<Team> {
    const teamCreateUseCase = new TeamCreateUseCase(
      this.repositoryFactory.buildTeamRepository(),
      new TeamValidator()
    )

    return teamCreateUseCase.execute(payload)
  }
}
