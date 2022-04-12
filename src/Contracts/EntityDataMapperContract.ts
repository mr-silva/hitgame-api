import { IEntityDataMapperInterface } from '../Interfaces/IEntityDataMapperInterface'

export abstract class EntityDataMapperContract<TDomainEntity, TDaoEntity>
  implements IEntityDataMapperInterface<TDomainEntity, TDaoEntity>
{
  toDomainEntity(daoEntity: TDaoEntity): TDomainEntity {
    throw new Error('Method not implemented.')
  }

  toDaoEntity(domainEntity: TDomainEntity): TDaoEntity {
    throw new Error('Method not implemented.')
  }

  toDomainEntityMany(daoEntities: TDaoEntity[]): TDomainEntity[] {
    return daoEntities.map(daoEntity => this.toDomainEntity(daoEntity))
  }

  toDaoEntityMany(domainEntities: TDomainEntity[]): TDaoEntity[] {
    return domainEntities.map(domainEntity => this.toDaoEntity(domainEntity))
  }
}
