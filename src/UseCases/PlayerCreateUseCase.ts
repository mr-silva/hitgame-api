import { Player } from '../Entities/Domain/Player'
import { Team } from '../Entities/Domain/Team'
import { IPlayerCreateDto } from '../Entities/Dto/IPlayerCreateDto'
import { PlayerRepository } from '../Repositories/PlayerRepository'
import { PlayerValidator } from '../Validators/PlayerValidator'
import { TeamGetUseCase } from './TeamGetUseCase'

export class PlayerCreateUseCase {
  constructor(
    private readonly playerRepository: PlayerRepository,
    private readonly teamGetUseCase: TeamGetUseCase,
    private readonly playerValidator: PlayerValidator
  ) {}

  public async execute(data: IPlayerCreateDto): Promise<Player> {
    await this.playerValidator.validateCreatePayload(data)

    let team: Team = null
    try {
      team = await this.teamGetUseCase.execute(data.teamId)
    } catch {}

    const player = new Player(data.name, data.position, data.height, data.weight).setTeam(team)

    return await this.playerRepository.create(player)
  }
}
