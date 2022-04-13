import { DataSource } from 'typeorm'
import { TypeOrmMysqlRepositoryContract } from '../Contracts/TypeOrmMysqlRepositoryContract'
import { TeamDataMapperMediator } from '../DataMappers/Mediators/TeamDataMapperMediator'
import { TeamEntity } from '../Entities/Dao/TeamEntity'
import { Team } from '../Entities/Domain/Team'
import { DataMapperFactory } from '../Factories/DataMapperFactory'

export class TeamRepository extends TypeOrmMysqlRepositoryContract<Team, TeamEntity> {
  constructor(dataSource: DataSource, dataMapper: DataMapperFactory) {
    super(dataSource.getRepository(TeamEntity), dataMapper.buildTeamDataMapperMediator())
  }
}
