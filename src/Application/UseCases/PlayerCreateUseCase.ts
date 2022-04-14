import { IRepositoryInterface } from '../../Adapters/Interfaces/IRepositotyInterface'
import { IValidatorInterface } from '../../Adapters/Interfaces/IValidatorInterface'
import { PlayerValidator } from '../../Adapters/Validators/PlayerValidator'
import { Player } from '../../Business/Entities/Domain/Player'
import { IPlayerCreateDto } from '../Dto/IPlayerCreateDto'

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
