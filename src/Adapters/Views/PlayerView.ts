import { Player } from '../../Business/Entities/Domain/Player'
import { PlayerPositionEnum } from '../../Business/Enums/PlayerPositionEnum'
import { StateEnum } from '../../Business/Enums/StateEnum'
import { ViewContract } from '../Contracts/ViewContract'

export class PlayerView extends ViewContract<Player, IPlayerView> {
  render(entity: Player, detailedView: boolean = true): IPlayerView {
    const playerView: IPlayerView = {
      id: entity.getId(),
      name: entity.getName(),
      position: entity.getPosition(),
      height: entity.getHeight(),
      weight: entity.getWeight()
    }

    if (!detailedView) return playerView

    return {
      ...playerView,
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

export interface IPlayerView {
  id: string
  name: string
  position: PlayerPositionEnum
  height: number
  weight: number
  hasTeam?: boolean
  team?: {
    id: string
    name: string
    state: StateEnum
  }
}
