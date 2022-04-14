export interface IValidatorInterface<TDto> {
  /**
   * Válida um payload de criação.
   *
   * @param {TDto} data
   */
  validateCreatePayload(data: TDto): Promise<void>
}
