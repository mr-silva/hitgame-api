import { Player } from '../Entities/Domain/Player'
import { IPlayerCreateDto } from '../Entities/Dto/IPlayerCreateDto'
import { PlayerRepository } from '../Repositories/PlayerRepository'
import { PlayerValidator } from '../Validators/PlayerValidator'

export class PlayerCreateUseCase {
  constructor(
    private readonly playerRepository: PlayerRepository,
    private readonly playerValidator: PlayerValidator
  ) {}

  public async execute(data: IPlayerCreateDto): Promise<Player> {
    await this.playerValidator.validateCreatePayload(data)

    const player = new Player(data.name, data.position, data.height, data.weight)

    return await this.playerRepository.create(player)
  }
}
