import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { PlayerPositionEnum } from '../../Enums/PlayerPositionEnum'
import { TeamEntity } from './TeamEntity'

@Entity('player')
export class PlayerEntity {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column({
    type: 'enum',
    enum: PlayerPositionEnum
  })
  position: PlayerPositionEnum

  @Column()
  height: number

  @Column()
  weight: number

  @ManyToOne(() => TeamEntity, team => team.players, {
    orphanedRowAction: 'nullify',
    onDelete: 'SET NULL',
    onUpdate: 'NO ACTION'
  })
  @JoinColumn({
    name: 'team_id'
  })
  team: TeamEntity

  constructor(
    name: string,
    position: PlayerPositionEnum,
    height: number,
    weight: number,
    id: string
  ) {
    this.name = name
    this.position = position
    this.height = height
    this.weight = weight
    this.id = id
  }
}
