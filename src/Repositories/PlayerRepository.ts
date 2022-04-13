import { DataSource, SelectQueryBuilder } from 'typeorm'
import { TypeOrmMysqlRepositoryContract } from '../Contracts/TypeOrmMysqlRepositoryContract'
import { PlayerEntity } from '../Entities/Dao/PlayerEntity'
import { Player } from '../Entities/Domain/Player'
import { DataMapperFactory } from '../Factories/DataMapperFactory'

export class PlayerRepository extends TypeOrmMysqlRepositoryContract<Player, PlayerEntity> {
  constructor(dataSource: DataSource, dataMapper: DataMapperFactory) {
    super(dataSource.getRepository(PlayerEntity), dataMapper.buildPlayerDataMapperMediator())
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
