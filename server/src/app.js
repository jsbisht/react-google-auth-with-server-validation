import * as express from 'express'
import * as path from 'path'
import * as cookieParser from 'cookie-parser'
import * as logger from 'morgan'
import * as cors from 'cors'

import { allowOrigins } from './middlewares/allow-origins'

import indexRouter from './routes/index'
import authRouter from './routes/auth'
import listRouter from './routes/list'

var app = express()

app.use(cors({ origin: true }))
app.use(allowOrigins)
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))

app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/list', listRouter)

export default app
