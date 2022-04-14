import { DataSource, SelectQueryBuilder } from 'typeorm'
import { Team } from '../../Business/Entities/Domain/Team'
import { DataNotFoundError } from '../../Business/Errors'
import { TypeOrmMysqlRepositoryContract } from '../Contracts/TypeOrmMysqlRepositoryContract'
import { TeamEntity } from '../Entities/Dao/TeamEntity'
import { DataMapperFactory } from '../Factories/DataMapperFactory'

export class TeamRepository extends TypeOrmMysqlRepositoryContract<Team, TeamEntity> {
  constructor(
    dataSource: DataSource,
    dataMapper: DataMapperFactory,
    dataNotFoundError: DataNotFoundError
  ) {
    super(
      dataSource.getRepository(TeamEntity),
      dataMapper.buildTeamDataMapperMediator(),
      dataNotFoundError
    )
  }

  protected customToGetAll(query: SelectQueryBuilder<TeamEntity>): SelectQueryBuilder<TeamEntity> {
    return this.customJoin(query)
  }

  protected customToGetOneById(
    query: SelectQueryBuilder<TeamEntity>
  ): SelectQueryBuilder<TeamEntity> {
    return this.customJoin(query)
  }

  private customJoin(query: SelectQueryBuilder<TeamEntity>): SelectQueryBuilder<TeamEntity> {
    return query.leftJoinAndSelect('TeamEntity.players', 'players')
  }
}
