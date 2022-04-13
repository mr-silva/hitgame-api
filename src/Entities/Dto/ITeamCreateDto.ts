import { StateEnum } from '../../Enums/StateEnum'

export interface ITeamCreateDto {
  name: string
  openningDate: Date
  state: StateEnum
}
