import { IRepositoryInterface } from '../../Adapters/Interfaces/IRepositotyInterface'
import { IValidatorInterface } from '../../Adapters/Interfaces/IValidatorInterface'
import { TeamValidator } from '../../Adapters/Validators/TeamValidator'
import { Team } from '../../Business/Entities/Domain/Team'
import { ITeamCreateDto } from '../Dto/ITeamCreateDto'

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
