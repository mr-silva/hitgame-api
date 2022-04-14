import { Request, Response, NextFunction } from 'express'
import { Factory } from '../../Adapters/Factories/Factory'
import { TeamView } from '../Views/TeamView'

export class TeamHandler {
  public async get(request: Request, response: Response, next: NextFunction) {
    try {
      const factory = new Factory()

      const result = await factory
        .buildFacadeFactory()
        .buildTeamFacade()
        .getOneById(request.params.id)

      response.status(200).send(new TeamView().render(result))
    } catch (e) {
      console.error(e)
      next(e)
    }
  }

  public async post(request: Request, response: Response, next: NextFunction) {
    try {
      const factory = new Factory()

      const result = await factory.buildFacadeFactory().buildTeamFacade().create(request.body)

      response.status(201).send(new TeamView().render(result))
    } catch (e) {
      console.error(e)
      next(e)
    }
  }
}
