import { Request, Response, NextFunction } from 'express'
import { Factory } from '../../Adapters/Factories/Factory'
import { PlayerView } from '../../Adapters/Views/PlayerView'
import { MysqlDatabase } from '../Databases/MysqlDatabase'

export class PlayerController {
  public async get(request: Request, response: Response, next: NextFunction) {
    try {
      const factory = new Factory(MysqlDatabase.getConnection())

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
      const factory = new Factory(MysqlDatabase.getConnection())

      const result = await factory.buildFacadeFactory().buildPlayerFacade().create(request.body)

      response.status(201).send(new PlayerView().render(result))
    } catch (e) {
      console.error(e)
      next(e)
    }
  }

  public async assignTeam(request: Request, response: Response, next: NextFunction) {
    try {
      const factory = new Factory(MysqlDatabase.getConnection())

      const result = await factory
        .buildFacadeFactory()
        .buildPlayerFacade()
        .assignTeam(request.params.id, request.params.teamId)

      response.status(200).send(new PlayerView().render(result))
    } catch (e) {
      console.error(e)
      next(e)
    }
  }

  public async removeTeam(request: Request, response: Response, next: NextFunction) {
    try {
      const factory = new Factory(MysqlDatabase.getConnection())

      const result = await factory
        .buildFacadeFactory()
        .buildPlayerFacade()
        .removeTeam(request.params.id)

      response.status(200).send(new PlayerView().render(result))
    } catch (e) {
      console.error(e)
      next(e)
    }
  }
}
