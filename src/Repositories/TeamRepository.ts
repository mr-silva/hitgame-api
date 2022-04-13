import { DataSource } from 'typeorm'
import { TypeOrmMysqlRepositoryContract } from '../Contracts/TypeOrmMysqlRepositoryContract'
import { TeamEntity } from '../Entities/Dao/TeamEntity'
import { Team } from '../Entities/Domain/Team'
import { DataNotFoundError } from '../Entities/Errors'
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
}
