import { ViewContract } from '../Contracts/ViewContract'
import { Team } from '../Entities/Domain/Team'
import { StateEnum } from '../Enums/StateEnum'
import { IPlayerView, PlayerView } from './PlayerView'

export class TeamView extends ViewContract<Team, ITeamView> {
  render(entity: Team): ITeamView {
    return {
      id: entity.getId(),
      name: entity.getName(),
      openningDate: entity.getOpenningDate(),
      state: entity.getState(),
      playerRoster: entity.getPlayers()?.length
        ? new PlayerView().renderMany(entity.getPlayers(), false)
        : []
    }
  }
}

export interface ITeamView {
  id: string
  name: string
  openningDate: Date
  state: StateEnum
  playerRoster: IPlayerView[]
}
