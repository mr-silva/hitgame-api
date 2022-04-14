import { Schema, ValidationError } from 'joi'
import { IValidatorInterface } from '../../Application/Interfaces/IValidatorInterface'
import { InvalidDataError } from '../../Business/Errors'
import { IErrorDetail } from '../../Business/Interfaces/IErrorDetail'

export abstract class JoiSchemaValidatorContract implements IValidatorInterface<any> {
  /**
   * Válida um payload com base em um Schema.
   *
   * @param {T} data
   * @param {Schema} schema
   */
  protected async validateBySchema<T>(data: T, schema: Schema): Promise<void> {
    try {
      await schema.validateAsync(data, { abortEarly: false })
    } catch (e) {
      if (!(e instanceof ValidationError)) throw e

      const joiError: ValidationError = e
      throw new InvalidDataError(
        'Invalid data.',
        joiError.details.map(detail => {
          const formattedErrorDetail: IErrorDetail = {
            id: `${detail.path.length ? `${detail.path.join('.')}.` : ''}${detail.type}`,
            message: detail.message
          }

          if (detail.context?.valids) formattedErrorDetail.enum = detail.context.valids

          return formattedErrorDetail
        })
      )
    }
  }

  public async validateCreatePayload(data: any): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
