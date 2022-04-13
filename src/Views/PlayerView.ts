import { ViewContract } from '../Contracts/ViewContract'
import { Player } from '../Entities/Domain/Player'
import { PlayerPositionEnum } from '../Enums/PlayerPositionEnum'
import { StateEnum } from '../Enums/StateEnum'

export class PlayerView extends ViewContract<Player, IPlayerView> {
  render(entity: Player): IPlayerView {
    return {
      id: entity.getId(),
      name: entity.getName(),
      position: entity.getPosition(),
      height: entity.getHeight(),
      weight: entity.getWeight(),
      hasTeam: !!entity.getTeam(),
      team: !!entity.getTeam()
        ? {
            id: entity.getTeam().getId(),
            name: entity.getTeam().getName(),
            state: entity.getTeam().getState()
          }
        : null
    }
  }
}

interface IPlayerView {
  id: string
  name: string
  position: PlayerPositionEnum
  height: number
  weight: number
  hasTeam: boolean
  team?: {
    id: string
    name: string
    state: StateEnum
  }
}