import { InvalidDataError } from '../Entities/Errors'
import { IErrorDetail } from '../Interfaces'
import { Schema, ValidationError } from 'joi'

export abstract class JoiSchemaValidatorContract {
  /**
   * Válida um payload com base em um Schema.
   *
   * @param {T} data
   * @param {Schema} schema
   */
  protected async validateBySchema<T>(data: T, schema: Schema): Promise<void> {
    try {
      await schema.validateAsync(data, { abortEarly: true })
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
}
