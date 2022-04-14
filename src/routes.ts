import { Router } from 'express'
import { PlayerHandler } from './Handlers/PlayerHandler'
import { TeamHandler } from './Handlers/TeamHandler'

const router = Router()
const playerHandler = new PlayerHandler()
const teamHandler = new TeamHandler()

router.route('/player/:id').get(playerHandler.get)
router.route('/player').post(playerHandler.post)
router.route('/player/:id/assign-team/:teamId').put(playerHandler.assignTeam)
router.route('/player/:id/remove-team').put(playerHandler.removeTeam)

router.route('/team/:id').get(teamHandler.get)
router.route('/team').post(teamHandler.post)

export { router }
