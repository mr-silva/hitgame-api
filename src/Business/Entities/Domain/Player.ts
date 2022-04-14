import { Base } from './Base'
import { PlayerPositionEnum } from '../../Enums/PlayerPositionEnum'
import { Team } from './Team'

export class Player extends Base {
  private team: Team

  constructor(
    private readonly name: string,
    private readonly position: PlayerPositionEnum,
    private readonly height: number,
    private readonly weight: number,
    id?: string
  ) {
    super(id)
  }

  public setTeam(team: Team): this {
    this.team = team
    return this
  }

  public getName(): string {
    return this.name
  }

  public getPosition(): PlayerPositionEnum {
    return this.position
  }

  public getHeight(): number {
    return this.height
  }

  public getWeight(): number {
    return this.weight
  }

  public getTeam(): Team {
    return this.team
  }
}
