export interface IRepository<TDomainEntity> {
  /**
   * Retorna uma lista de registros.
   *
   *
   * @param {TFilter} filters
   *
   * @returns {Promise<TDomainEntity>}
   */
  getAll<TFilter = any>(filter?: TFilter): Promise<TDomainEntity[]>

  /**
   * Retorna um único registro filtrando pelo id.
   *
   * @param {string} id
   *
   * @returns {Promise<TDomainEntity>}
   */
  getOneById(id: string): Promise<TDomainEntity>

  /**
   * Exclui um único registro filtrando pelo id.
   *
   * @param {string} id
   *
   * @returns {Promise<boolean>}
   */
  delete(id: string): Promise<boolean>

  /**
   * Cria um registro com base na entidade.
   *
   * @param {TDomainEntity} entity
   *
   * @returns {Promise<TDomainEntity>}
   */
  create(entity: TDomainEntity): Promise<TDomainEntity>

  /**
   * Cria ou atualiza um registro com base na entidade.
   *
   * @param {TDomainEntity} entity
   * @param {{} | string} conditions
   *
   * @returns {Promise<TDomainEntity>}
   */
  save(entity: TDomainEntity): Promise<TDomainEntity>
}
