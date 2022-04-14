import { DataSource, SelectQueryBuilder } from 'typeorm'
import { Player } from '../../Business/Entities/Domain/Player'
import { DataNotFoundError } from '../../Business/Errors'
import { TypeOrmMysqlRepositoryContract } from '../Contracts/TypeOrmMysqlRepositoryContract'
import { PlayerEntity } from '../Entities/Dao/PlayerEntity'
import { DataMapperFactory } from '../Factories/DataMapperFactory'

export class PlayerRepository extends TypeOrmMysqlRepositoryContract<Player, PlayerEntity> {
  constructor(
    dataSource: DataSource,
    dataMapper: DataMapperFactory,
    dataNotFoundError: DataNotFoundError
  ) {
    super(
      dataSource.getRepository(PlayerEntity),
      dataMapper.buildPlayerDataMapperMediator(),
      dataNotFoundError
    )
  }

  protected customToGetAll(
    query: SelectQueryBuilder<PlayerEntity>
  ): SelectQueryBuilder<PlayerEntity> {
    return this.customJoin(query)
  }

  protected customToGetOneById(
    query: SelectQueryBuilder<PlayerEntity>
  ): SelectQueryBuilder<PlayerEntity> {
    return this.customJoin(query)
  }

  private customJoin(query: SelectQueryBuilder<PlayerEntity>): SelectQueryBuilder<PlayerEntity> {
    return query.leftJoinAndSelect('PlayerEntity.team', 'team')
  }
}
