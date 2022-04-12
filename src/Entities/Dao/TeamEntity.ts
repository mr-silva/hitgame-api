import { Entity, PrimaryColumn, Column, OneToMany, JoinColumn } from 'typeorm'
import { StateEnum } from '../../Enums/StateEnum'
import { PlayerEntity } from './PlayerEntity'

@Entity('team')
export class TeamEntity {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column({
    name: 'openning_date'
  })
  openningDate: Date

  @Column({
    type: 'enum',
    enum: StateEnum
  })
  state: StateEnum

  @OneToMany(() => PlayerEntity, player => player.team, {
    orphanedRowAction: 'delete'
  })
  @JoinColumn({
    name: 'team_id'
  })
  players: PlayerEntity[]

  constructor(name: string, openningDate: Date, state: StateEnum, id: string) {
    this.name = name
    this.openningDate = openningDate
    this.state = state
    this.id = id
  }

  public addPlayer(player: PlayerEntity): this {
    if (!this.players) this.players = []

    this.players.push(player)
    return this
  }
}
