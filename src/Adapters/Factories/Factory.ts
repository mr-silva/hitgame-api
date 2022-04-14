import { DataSource } from 'typeorm'
import { DataMapperFactory } from './DataMapperFactory'
import { FacadeFactory } from './FacadeFactory'
import { RepositoryFactory } from './RepositoryFactory'

export class Factory {
  constructor(private readonly dbConnection: DataSource) {}

  public buildDataMapperFactory() {
    return new DataMapperFactory()
  }

  public buildRepositoryFactory() {
    return new RepositoryFactory(this.dbConnection, this.buildDataMapperFactory())
  }

  public buildFacadeFactory() {
    return new FacadeFactory(this.buildRepositoryFactory())
  }
}
