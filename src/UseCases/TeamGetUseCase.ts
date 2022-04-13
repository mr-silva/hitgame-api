import { Team } from '../Entities/Domain/Team'
import { TeamRepository } from '../Repositories/TeamRepository'

export class TeamGetUseCase {
  constructor(private readonly teamRepository: TeamRepository) {}

  public async execute(id: string): Promise<Team> {
    return this.teamRepository.getOneById(id)
  }
}
