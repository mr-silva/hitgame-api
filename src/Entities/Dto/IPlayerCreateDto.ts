import { PlayerPositionEnum } from '../../Enums/PlayerPositionEnum'

export interface IPlayerCreateDto {
  name: string
  position: PlayerPositionEnum
  height: number
  weight: number
  teamId?: string
}
