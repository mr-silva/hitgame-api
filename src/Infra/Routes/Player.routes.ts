import { Router } from 'express'
import { PlayerController } from '../Controllers/PlayerController'

const playerRouter = Router()
const playerController = new PlayerController()

playerRouter.route('/:id').get(playerController.get.bind(playerController))

playerRouter
  .route('/')
  .post(playerController.post.bind(playerController))
  .get(playerController.getAll.bind(playerController))

playerRouter
  .route('/:id/assign-team/:teamId')
  .put(playerController.assignTeam.bind(playerController))

playerRouter.route('/:id/remove-team').put(playerController.removeTeam.bind(playerController))

export { playerRouter }
