import * as Joi from 'joi'
import { Schema } from 'joi'
import { JoiSchemaValidatorContract } from '../Contracts/JoiSchemaValidatorContract'
import { ITeamCreateDto } from '../Entities/Dto/ITeamCreateDto'
import { StateEnum } from '../Enums/StateEnum'

export class TeamValidator extends JoiSchemaValidatorContract {
  private teamCreateUseCase: Schema

  constructor() {
    super()

    this.teamCreateUseCase = Joi.object({
      name: Joi.string().required(),
      openningDate: Joi.date().required(),
      state: Joi.string().valid(...Object.keys(StateEnum))
    })
  }

  public async validateCreatePayload(data: ITeamCreateDto): Promise<void> {
    await this.validateBySchema<ITeamCreateDto>(data, this.teamCreateUseCase)
  }
}
