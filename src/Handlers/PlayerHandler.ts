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

      return res.json(new PlayerView().render(result))
    } catch (e) {
      console.error(e)
      next(e)
    }
  }

  public async post(req: Request, res: Response, next: NextFunction) {
    try {
      const factory = new Factory()

      const result = await factory.buildFacadeFactory().buildPlayerFacade().post(req.body)

      return res.json(new PlayerView().render(result))
    } catch (e) {
      console.error(e)
      next(e)
    }
  }
}
