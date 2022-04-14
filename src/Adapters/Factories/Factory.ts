import { MysqlDatabase } from '../../Infra/Databases/MysqlDatabase'
import { DataMapperFactory } from './DataMapperFactory'
import { FacadeFactory } from './FacadeFactory'
import { RepositoryFactory } from './RepositoryFactory'

export class Factory {
  public buildDataMapperFactory() {
    return new DataMapperFactory()
  }

  public buildRepositoryFactory() {
    return new RepositoryFactory(MysqlDatabase.getConnection(), this.buildDataMapperFactory())
  }

  public buildFacadeFactory() {
    return new FacadeFactory(this.buildRepositoryFactory())
  }
}
