import { Player } from '../../Business/Entities/Domain/Player'
import { IPlayerCreateDto } from '../Dto/IPlayerCreateDto'
import { IRepositoryInterface } from '../Interfaces/IRepositotyInterface'
import { IValidatorInterface } from '../Interfaces/IValidatorInterface'

export class PlayerCreateUseCase {
  constructor(
    private readonly playerRepository: IRepositoryInterface<Player>,
    private readonly playerValidator: IValidatorInterface<IPlayerCreateDto>
  ) {}

  public async execute(data: IPlayerCreateDto): Promise<Player> {
    await this.playerValidator.validateCreatePayload(data)

    const player = new Player(data.name, data.position, data.height, data.weight)

    return await this.playerRepository.create(player)
  }
}
