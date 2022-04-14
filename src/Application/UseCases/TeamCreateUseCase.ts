import { Team } from '../../Business/Entities/Domain/Team'
import { ITeamCreateDto } from '../Dto/ITeamCreateDto'
import { IRepositoryInterface } from '../Interfaces/IRepositotyInterface'
import { IValidatorInterface } from '../Interfaces/IValidatorInterface'

export class TeamCreateUseCase {
  constructor(
    private readonly teamRepository: IRepositoryInterface<Team>,
    private readonly teamValidator: IValidatorInterface<ITeamCreateDto>
  ) {}

  public async execute(data: ITeamCreateDto): Promise<Team> {
    await this.teamValidator.validateCreatePayload(data)

    const team = new Team(data.name, data.openningDate, data.state)

    return this.teamRepository.create(team)
  }
}
