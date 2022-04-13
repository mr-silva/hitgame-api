import { DataSource } from 'typeorm'
import { PlayerNotFoundError } from '../Entities/Domain/Errors/PlayerNotFoundError'
import { TeamNotFoundError } from '../Entities/Domain/Errors/TeamNotFoundError'
import { PlayerRepository } from '../Repositories/PlayerRepository'
import { TeamRepository } from '../Repositories/TeamRepository'
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
