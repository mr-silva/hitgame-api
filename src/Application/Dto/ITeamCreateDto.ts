import { StateEnum } from '../../Business/Enums/StateEnum'

export interface ITeamCreateDto {
  name: string
  openningDate: Date
  state: StateEnum
}
