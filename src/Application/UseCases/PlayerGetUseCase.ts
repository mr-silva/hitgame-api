import { IRepositoryInterface } from '../../Adapters/Interfaces/IRepositotyInterface'
import { Player } from '../../Business/Entities/Domain/Player'

export class PlayerGetUseCase {
  constructor(private readonly playerRepository: IRepositoryInterface<Player>) {}

  public async execute(id: string): Promise<Player> {
    return await this.playerRepository.getOneById(id)
  }
}
