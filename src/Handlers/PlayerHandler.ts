import { Request, Response, NextFunction } from 'express'
import { Factory } from '../Factories/Factory'
import { PlayerView } from '../Views/PlayerView'

export class PlayerHandler {
  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      const factory = new Factory()

      const result = await factory
        .buildFacadeFactory()
        .buildPlayerFacade()
        .getOneById(req.params.id)

      res.status(200).send(new PlayerView().render(result))
    } catch (e) {
      console.error(e)
      next(e)
    }
  }

  public async post(req: Request, res: Response, next: NextFunction) {
    try {
      const factory = new Factory()

      const result = await factory.buildFacadeFactory().buildPlayerFacade().post(req.body)

      res.status(201).send(new PlayerView().render(result))
    } catch (e) {
      console.error(e)
      next(e)
    }
  }
}
