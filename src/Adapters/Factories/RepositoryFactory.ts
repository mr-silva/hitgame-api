import { DataSource } from 'typeorm'
import { PlayerRepository } from '../../Adapters/Repositories/PlayerRepository'
import { TeamRepository } from '../../Adapters/Repositories/TeamRepository'
import { PlayerNotFoundError } from '../../Business/Entities/Domain/Errors/PlayerNotFoundError'
import { TeamNotFoundError } from '../../Business/Entities/Domain/Errors/TeamNotFoundError'
import { DataMapperFactory } from './DataMapperFactory'

export class RepositoryFactory {
  constructor(
    private readonly dataSource: DataSource,
    private readonly dataMapperFactory: DataMapperFactory
  ) {}

  public buildPlayerRepository() {
    return new PlayerRepository(this.dataSource, this.dataMapperFactory, new PlayerNotFoundError())
  }

  public buildTeamRepository() {
    return new TeamRepository(this.dataSource, this.dataMapperFactory, new TeamNotFoundError())
  }
}
