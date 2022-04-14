import { Player } from '../../Business/Entities/Domain/Player'
import { EntityDataMapperContract } from '../Contracts/EntityDataMapperContract'
import { PlayerEntity } from '../Entities/Dao/PlayerEntity'

export class PlayerDataMapper extends EntityDataMapperContract<Player, PlayerEntity> {
  toDomainEntity(daoEntity: PlayerEntity): Player {
    return new Player(
      daoEntity.name,
      daoEntity.position,
      daoEntity.height,
      daoEntity.weight,
      daoEntity.id
    )
  }

  toDaoEntity(domainEntity: Player): PlayerEntity {
    return new PlayerEntity(
      domainEntity.getName(),
      domainEntity.getPosition(),
      domainEntity.getHeight(),
      domainEntity.getWeight(),
      domainEntity.getId()
    )
  }
}
