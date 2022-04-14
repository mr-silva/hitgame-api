import { IRepositoryInterface } from '../../Adapters/Interfaces/IRepositotyInterface'
import { Team } from '../../Business/Entities/Domain/Team'

export class TeamGetUseCase {
  constructor(private readonly teamRepository: IRepositoryInterface<Team>) {}

  public async execute(id: string): Promise<Team> {
    return this.teamRepository.getOneById(id)
  }
}
