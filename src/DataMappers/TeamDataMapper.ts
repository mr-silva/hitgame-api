import { EntityDataMapperContract } from '../Contracts/EntityDataMapperContract'
import { Team } from '../Entities/Domain/Team'
import { TeamEntity } from '../Entities/Dao/TeamEntity'

export class TeamDataMapper extends EntityDataMapperContract<Team, TeamEntity> {
  toDomainEntity(daoEntity: TeamEntity): Team {
    return new Team(daoEntity.name, daoEntity.openningDate, daoEntity.state, daoEntity.id)
  }

  toDaoEntity(domainEntity: Team): TeamEntity {
    return new TeamEntity(
      domainEntity.getName(),
      domainEntity.getOpenningDate(),
      domainEntity.getState(),
      domainEntity.getId()
    )
  }
}
