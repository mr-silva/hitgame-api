import { PlayerFacade } from '../Facades/PlayerFacade'
import { TeamFacade } from '../Facades/TeamFacade'
import { RepositoryFactory } from './RepositoryFactory'

export class FacadeFactory {
  constructor(private readonly repositoryFactory: RepositoryFactory) {}

  public buildPlayerFacade() {
    return new PlayerFacade(this.repositoryFactory)
  }

  public buildTeamFacade() {
    return new TeamFacade(this.repositoryFactory)
  }
}
