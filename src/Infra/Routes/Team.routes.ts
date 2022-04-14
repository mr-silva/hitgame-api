import { Router } from 'express'
import { TeamController } from '../Controllers/TeamController'

const teamRouter = Router()
const teamController = new TeamController()

teamRouter.route('/:id').get(teamController.get.bind(teamController))

teamRouter.route('/').post(teamController.post.bind(teamController))

export { teamRouter }
