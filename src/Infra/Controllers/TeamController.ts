import { Request, Response, NextFunction } from 'express'
import { Factory } from '../../Adapters/Factories/Factory'
import { TeamView } from '../../Adapters/Views/TeamView'
import { MysqlDatabase } from '../Databases/MysqlDatabase'

export class TeamController {
  public async get(request: Request, response: Response, next: NextFunction) {
    try {
      const factory = new Factory(MysqlDatabase.getConnection())

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

  public async getAll(request: Request, response: Response, next: NextFunction) {
    try {
      const factory = new Factory(MysqlDatabase.getConnection())

      const result = await factory.buildFacadeFactory().buildTeamFacade().getAll()

      response.status(200).send(new TeamView().renderMany(result, false))
    } catch (e) {
      console.error(e)
      next(e)
    }
  }

  public async post(request: Request, response: Response, next: NextFunction) {
    try {
      const factory = new Factory(MysqlDatabase.getConnection())

      const result = await factory.buildFacadeFactory().buildTeamFacade().create(request.body)

      response.status(201).send(new TeamView().render(result))
    } catch (e) {
      console.error(e)
      next(e)
    }
  }
}
