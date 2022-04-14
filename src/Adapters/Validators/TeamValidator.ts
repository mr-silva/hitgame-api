import * as Joi from 'joi'
import { Schema } from 'joi'
import { ITeamCreateDto } from '../../Application/Dto/ITeamCreateDto'
import { StateEnum } from '../../Business/Enums/StateEnum'
import { JoiSchemaValidatorContract } from '../Contracts/JoiSchemaValidatorContract'

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
