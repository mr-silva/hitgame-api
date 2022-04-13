import * as cors from 'cors'
import * as express from 'express'
import { ErrorHandler } from './Middlewares/ErrorHandlerMiddleware'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(router)

app.use(new ErrorHandler().error)
app.use(new ErrorHandler().notFound)

export { app }
