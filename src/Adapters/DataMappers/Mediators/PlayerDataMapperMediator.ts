import { TeamDataMapper } from '../TeamDataMapper'
import { PlayerDataMapper } from '../PlayerDataMapper'
import { EntityDataMapperContract } from '../../Contracts/EntityDataMapperContract'
import { Player } from '../../../Business/Entities/Domain/Player'
import { PlayerEntity } from '../../Entities/Dao/PlayerEntity'

export class PlayerDataMapperMediator extends EntityDataMapperContract<Player, PlayerEntity> {
  constructor(
    private readonly playerDataMapper: PlayerDataMapper,
    private readonly teamDataMapper: TeamDataMapper
  ) {
    super()
  }

  toDomainEntity(daoEntity: PlayerEntity): Player {
    const player = this.playerDataMapper.toDomainEntity(daoEntity)

    if (daoEntity.team) player.setTeam(this.teamDataMapper.toDomainEntity(daoEntity.team))

    return player
  }

  toDaoEntity(domainEntity: Player): PlayerEntity {
    const player = this.playerDataMapper.toDaoEntity(domainEntity)

    player.team = domainEntity?.getTeam()
      ? this.teamDataMapper.toDaoEntity(domainEntity.getTeam())
      : null

    return player
  }
}
