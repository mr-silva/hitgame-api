import * as Joi from 'joi'
import { Schema } from 'joi'
import { IPlayerCreateDto } from '../../Application/Dto/IPlayerCreateDto'
import { PlayerPositionEnum } from '../../Business/Enums/PlayerPositionEnum'
import { JoiSchemaValidatorContract } from '../Contracts/JoiSchemaValidatorContract'

export class PlayerValidator extends JoiSchemaValidatorContract {
  private playerCreateSchema: Schema

  constructor() {
    super()

    this.playerCreateSchema = Joi.object({
      name: Joi.string().required(),
      position: Joi.string()
        .valid(...Object.keys(PlayerPositionEnum))
        .required(),
      height: Joi.number().min(1.4).max(2.5).required(),
      weight: Joi.number().min(30).max(170).required()
    })
  }

  public async validateCreatePayload(data: IPlayerCreateDto) {
    return this.validateBySchema<IPlayerCreateDto>(data, this.playerCreateSchema)
  }
}
