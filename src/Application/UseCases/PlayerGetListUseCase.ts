import { Player } from '../../Business/Entities/Domain/Player'
import { IRepositoryInterface } from '../Interfaces/IRepositotyInterface'

export class PlayerGetListUseCase {
  constructor(private readonly playerRepository: IRepositoryInterface<Player>) {}

  public async execute(): Promise<Player[]> {
    return this.playerRepository.getAll()
  }
}
