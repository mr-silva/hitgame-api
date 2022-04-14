import { Router } from 'express'
import { playerRouter } from './Player.routes'
import { teamRouter } from './Team.routes'

const routes = Router()

routes.use('/player', playerRouter)
routes.use('/team', teamRouter)

export { routes }
