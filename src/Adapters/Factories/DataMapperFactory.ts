import { PlayerDataMapperMediator } from '../DataMappers/Mediators/PlayerDataMapperMediator'
import { TeamDataMapperMediator } from '../DataMappers/Mediators/TeamDataMapperMediator'
import { PlayerDataMapper } from '../DataMappers/PlayerDataMapper'
import { TeamDataMapper } from '../DataMappers/TeamDataMapper'

export class DataMapperFactory {
  public buildTeamDataMapper() {
    return new TeamDataMapper()
  }

  public buildPlayerDataMapper() {
    return new PlayerDataMapper()
  }

  public buildTeamDataMapperMediator() {
    return new TeamDataMapperMediator(this.buildTeamDataMapper(), this.buildPlayerDataMapper())
  }

  public buildPlayerDataMapperMediator() {
    return new PlayerDataMapperMediator(this.buildPlayerDataMapper(), this.buildTeamDataMapper())
  }
}
