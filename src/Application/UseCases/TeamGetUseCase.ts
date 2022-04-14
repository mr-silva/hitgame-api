import { Team } from '../../Business/Entities/Domain/Team'
import { IRepositoryInterface } from '../Interfaces/IRepositotyInterface'

export class TeamGetUseCase {
  constructor(private readonly teamRepository: IRepositoryInterface<Team>) {}

  public async execute(id: string): Promise<Team> {
    return this.teamRepository.getOneById(id)
  }
}
