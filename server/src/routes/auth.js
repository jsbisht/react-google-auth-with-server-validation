import * as express from 'express'
import { googleAuthValidate } from '../middlewares/google-auth'
import { FAILED, SUCCESS } from '../utility/constants'

const router = express.Router()

router.get('/', async (req, res) => {
  const result = await googleAuthValidate(req)
  const status = result ? SUCCESS : FAILED
  const statusCode = result ? 200 : 403
  res.status(statusCode).json({ status })
})

export default router
