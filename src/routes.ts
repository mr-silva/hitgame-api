import { Router } from 'express'
import { PlayerHandler } from './Handlers/PlayerHandler'

const router = Router()
const playerHandler = new PlayerHandler()

router.route('/player/:id').get(playerHandler.get.bind(playerHandler))
router.route('/player').post(playerHandler.post.bind(playerHandler))

export { router }
