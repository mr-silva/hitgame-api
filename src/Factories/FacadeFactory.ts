import { PlayerFacade } from '../Facades/PlayerFacade'
import { RepositoryFactory } from './RepositoryFactory'

export class FacadeFactory {
  constructor(private readonly repositoryFactory: RepositoryFactory) {}

  public buildPlayerFacade() {
    return new PlayerFacade(this.repositoryFactory)
  }
}
