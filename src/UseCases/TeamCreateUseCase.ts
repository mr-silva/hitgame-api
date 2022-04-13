import { Team } from '../Entities/Domain/Team'
import { ITeamCreateDto } from '../Entities/Dto/ITeamCreateDto'
import { TeamRepository } from '../Repositories/TeamRepository'
import { TeamValidator } from '../Validators/TeamValidator'

export class TeamCreateUseCase {
  constructor(
    private readonly teamRepository: TeamRepository,
    private readonly teamValidator: TeamValidator
  ) {}

  public async execute(data: ITeamCreateDto): Promise<Team> {
    await this.teamValidator.validateCreatePayload(data)

    const team = new Team(data.name, data.openningDate, data.state)

    return this.teamRepository.create(team)
  }
}
