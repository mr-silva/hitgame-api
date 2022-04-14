import { Request, Response, NextFunction } from 'express'
import { Factory } from '../Factories/Factory'
import { PlayerView } from '../Views/PlayerView'

export class PlayerHandler {
  public async get(request: Request, response: Response, next: NextFunction) {
    try {
      const factory = new Factory()

      const result = await factory
        .buildFacadeFactory()
        .buildPlayerFacade()
        .getOneById(request.params.id)

      response.status(200).send(new PlayerView().render(result))
    } catch (e) {
      console.error(e)
      next(e)
    }
  }

  public async post(request: Request, response: Response, next: NextFunction) {
    try {
      const factory = new Factory()

      const result = await factory.buildFacadeFactory().buildPlayerFacade().create(request.body)

      response.status(201).send(new PlayerView().render(result))
    } catch (e) {
      console.error(e)
      next(e)
    }
  }

  public async assignTeam(request: Request, response: Response, next: NextFunction) {
    try {
      const factory = new Factory()

      const result = await factory
        .buildFacadeFactory()
        .buildPlayerFacade()
        .assignTeam(request.params.id, request.params.teamId)

      response.status(204).send(result)
    } catch (e) {
      console.error(e)
      next(e)
    }
  }

  public async removeTeam(request: Request, response: Response, next: NextFunction) {
    try {
      const factory = new Factory()

      const result = await factory
        .buildFacadeFactory()
        .buildPlayerFacade()
        .removeTeam(request.params.id)

      response.status(204).send(result)
    } catch (e) {
      console.error(e)
      next(e)
    }
  }
}
