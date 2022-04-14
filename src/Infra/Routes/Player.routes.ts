import { Router } from 'express'
import { PlayerHandler } from '../Handlers/PlayerHandler'
import { PlayerPositionEnum } from '../../Business/Enums/PlayerPositionEnum'

const playerRouter = Router()
const playerHandler = new PlayerHandler()

playerRouter.get('/:id', playerHandler.get)

playerRouter.post('/', playerHandler.post)

playerRouter.put('/:id/assign-team/:teamId', playerHandler.assignTeam)

playerRouter.put('/:id/remove-team', playerHandler.removeTeam)

export { playerRouter }
