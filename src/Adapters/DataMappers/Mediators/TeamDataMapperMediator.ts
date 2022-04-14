import { EntityDataMapperContract } from '../../Contracts/EntityDataMapperContract'
import { TeamDataMapper } from '../TeamDataMapper'
import { PlayerDataMapper } from '../PlayerDataMapper'
import { Team } from '../../../Business/Entities/Domain/Team'
import { TeamEntity } from '../../Entities/Dao/TeamEntity'

export class TeamDataMapperMediator extends EntityDataMapperContract<Team, TeamEntity> {
  constructor(
    private readonly teamDataMapper: TeamDataMapper,
    private readonly playerDataMapper: PlayerDataMapper
  ) {
    super()
  }

  toDomainEntity(daoEntity: TeamEntity): Team {
    const team = this.teamDataMapper.toDomainEntity(daoEntity)

    if (daoEntity.players?.length) {
      const players = this.playerDataMapper.toDomainEntityMany(daoEntity.players)

      players.forEach(player => team.addPlayer(player))
    }

    return team
  }

  toDaoEntity(domainEntity: Team): TeamEntity {
    const team = this.teamDataMapper.toDaoEntity(domainEntity)

    if (domainEntity.getPlayers()?.length) {
      const players = this.playerDataMapper.toDaoEntityMany(domainEntity.getPlayers())

      players.forEach(player => team.addPlayer(player))
    }

    return team
  }
}
