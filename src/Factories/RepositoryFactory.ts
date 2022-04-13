import { DataSource } from 'typeorm'
import { PlayerRepository } from '../Repositories/PlayerRepository'
import { TeamRepository } from '../Repositories/TeamRepository'
import { DataMapperFactory } from './DataMapperFactory'

export class RepositoryFactory {
  constructor(
    private readonly dataSource: DataSource,
    private readonly dataMapperFactory: DataMapperFactory
  ) {}

  public buildPlayerRepository() {
    return new PlayerRepository(this.dataSource, this.dataMapperFactory)
  }

  public buildTeamRepository() {
    return new TeamRepository(this.dataSource, this.dataMapperFactory)
  }
}
