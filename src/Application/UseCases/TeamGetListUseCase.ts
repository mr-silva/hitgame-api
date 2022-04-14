import { Team } from '../../Business/Entities/Domain/Team'
import { IRepositoryInterface } from '../Interfaces/IRepositotyInterface'

export class TeamGetListUseCase {
  constructor(private readonly teamRepository: IRepositoryInterface<Team>) {}

  public async execute(): Promise<Team[]> {
    return this.teamRepository.getAll()
  }
}
