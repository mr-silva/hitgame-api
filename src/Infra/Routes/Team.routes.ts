import * as Joi from 'joi'
import { Router } from 'express'
import { StateEnum } from '../../Business/Enums/StateEnum'
import { TeamHandler } from '../Handlers/TeamHandler'

const teamRouter = Router()
const teamHandler = new TeamHandler()

teamRouter.get('/:id', teamHandler.get)

teamRouter.post('/', teamHandler.post)

export { teamRouter }
