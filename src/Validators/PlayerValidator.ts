import * as Joi from 'joi'
import { JoiSchemaValidatorContract } from '../Contracts/JoiSchemaValidatorContract'
import { Schema } from 'joi'
import { PlayerPositionEnum } from '../Enums/PlayerPositionEnum'
import { IPlayerCreateDto } from '../Entities/Dto/IPlayerCreateDto'

export class PlayerValidator extends JoiSchemaValidatorContract {
  private playerCreateSchema: Schema

  constructor() {
    super()

    this.playerCreateSchema = Joi.object({
      name: Joi.string().required(),
      position: Joi.string()
        .valid(...Object.keys(PlayerPositionEnum))
        .required(),
      height: Joi.number().min(1.6).max(2.5).required(),
      weight: Joi.number().min(30).max(140).required(),
      teamId: Joi.string().allow(null)
    })
  }

  public async validateCreatePayload(data: IPlayerCreateDto) {
    return this.validateBySchema<IPlayerCreateDto>(data, this.playerCreateSchema)
  }
}
