import { Base } from './Base'
import { StateEnum } from '../../Enums/StateEnum'
import { Player } from './Player'

export class Team extends Base {
  private players: Player[]

  constructor(
    private readonly name: string,
    private readonly openningDate: Date,
    private readonly state: StateEnum,
    id?: string
  ) {
    super(id)
  }

  public addPlayer(player: Player): this {
    if (!this.players) this.players = []
    this.players.push(player)
    return this
  }

  public getName(): string {
    return this.name
  }

  public getOpenningDate(): Date {
    return this.openningDate
  }

  public getState(): StateEnum {
    return this.state
  }

  public getPlayers(): Player[] {
    return this.players
  }
}
