import { Team } from '../../Business/Entities/Domain/Team'
import { StateEnum } from '../../Business/Enums/StateEnum'
import { ViewContract } from '../Contracts/ViewContract'
import { IPlayerView, PlayerView } from './PlayerView'

export class TeamView extends ViewContract<Team, ITeamView> {
  render(entity: Team): ITeamView {
    return {
      id: entity.getId(),
      name: entity.getName(),
      openningDate: entity.getOpenningDate(),
      state: entity.getState(),
      numberOfPlayers: entity.getPlayers()?.length || 0,
      roster: entity.getPlayers()?.length
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
  numberOfPlayers: number
  roster: IPlayerView[]
}
