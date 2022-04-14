export interface IValidatorInterface<TDto> {
  validateCreatePayload(data: TDto): Promise<void>
}
