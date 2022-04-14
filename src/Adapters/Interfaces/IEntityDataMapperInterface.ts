export interface IEntityDataMapperInterface<TDomainEntity, TDaoEntity> {
  /**
   * Converte uma entidade de banco de dados para uma entidade de domínio.
   *
   * @param {TDaoEntity} daoEntity
   */
  toDomainEntity(daoEntity: TDaoEntity): TDomainEntity

  /**
   * Converte uma entidade de domínio para uma entidade de banco de dados.
   *
   * @param {TDomainEntity} domainEntity
   */
  toDaoEntity(domainEntity: TDomainEntity): TDaoEntity

  /**
   * Converte uma lista de entidades de banco de dados para uma lista de entidades de domínio.
   *
   * @param {TDaoEntity[]} daoEntities
   */
  toDomainEntityMany(daoEntities: TDaoEntity[]): TDomainEntity[]

  /**
   * Converte uma lista de entidades de domínio para uma lista de entidades de banco de dados.
   *
   * @param domainEntities
   */
  toDaoEntityMany(domainEntities: TDomainEntity[]): TDaoEntity[]
}
