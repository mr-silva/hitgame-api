import { Repository as TypeOrmRepository, SelectQueryBuilder } from 'typeorm'
import { IRepositoryInterface } from '../../Application/Interfaces/IRepositotyInterface'
import { DataNotFoundError } from '../../Business/Errors'
import { EntityDataMapperContract } from './EntityDataMapperContract'

export abstract class TypeOrmMysqlRepositoryContract<TDomainEntity, TDaoEntity>
  implements IRepositoryInterface<TDomainEntity>
{
  protected readonly repository: TypeOrmRepository<TDaoEntity>
  protected readonly dataMapper: EntityDataMapperContract<TDomainEntity, TDaoEntity>

  public constructor(
    repository: TypeOrmRepository<TDaoEntity>,
    dataMapper: EntityDataMapperContract<TDomainEntity, TDaoEntity>,
    protected dataNotFoundError?: DataNotFoundError
  ) {
    this.repository = repository
    this.dataMapper = dataMapper

    if (!this.dataNotFoundError) this.dataNotFoundError = new DataNotFoundError()
  }

  public async getAll<TFilter = any>(filter?: TFilter): Promise<TDomainEntity[]> {
    const query = this.customToGetAll(this.repository.createQueryBuilder())

    return this.dataMapper.toDomainEntityMany(await query.getMany())
  }

  public async getOneById(id: string): Promise<TDomainEntity> {
    const query = this.customToGetOneById(
      this.repository.createQueryBuilder().andWhere(`${this.getTableName()}.id = :id`, { id })
    )

    const entity = await query.getOne()

    if (!entity) throw this.dataNotFoundError

    return this.dataMapper.toDomainEntity(entity)
  }

  public async create(entity: TDomainEntity): Promise<TDomainEntity> {
    return this.save(entity)
  }

  public async save(entity: TDomainEntity): Promise<TDomainEntity> {
    const result = await this.repository.save(this.dataMapper.toDaoEntity(entity))

    return this.dataMapper.toDomainEntity(result)
  }

  public async delete(id: string): Promise<boolean> {
    await this.repository.delete(id)

    return true
  }

  /**
   * Permite aplicar modificações na 'query' do método getAll().
   *
   * @param {SelectQueryBuilder<TDaoEntity>} query
   *
   * @returns {SelectQueryBuilder<TDaoEntity>}
   */
  protected customToGetAll(query: SelectQueryBuilder<TDaoEntity>): SelectQueryBuilder<TDaoEntity> {
    return query
  }

  /**
   * Permite aplicar modificações na 'query' do método getOneById().
   *
   * @param {SelectQueryBuilder<TDaoEntity>} query
   *
   * @returns {SelectQueryBuilder<TDaoEntity>}
   */
  protected customToGetOneById(
    query: SelectQueryBuilder<TDaoEntity>
  ): SelectQueryBuilder<TDaoEntity> {
    return query
  }

  /**
   * Retorna o nome da tabela do repositório.
   */
  private getTableName(): string {
    return this.repository.metadata.targetName
  }
}
