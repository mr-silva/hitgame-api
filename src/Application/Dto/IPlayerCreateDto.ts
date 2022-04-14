import { PlayerPositionEnum } from '../../Business/Enums/PlayerPositionEnum'

export interface IPlayerCreateDto {
  name: string
  position: PlayerPositionEnum
  height: number
  weight: number
}
