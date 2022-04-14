import * as cors from 'cors'
import * as express from 'express'
import { ErrorHandler } from './Adapters/Middlewares/ErrorHandlerMiddleware'
import { routes } from './Infra/Routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(routes)

app.use(new ErrorHandler().error)
app.use(new ErrorHandler().notFound)

export { app }
