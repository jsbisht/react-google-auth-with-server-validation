import * as express from 'express'
import { googleAuthValidate } from '../middlewares/google-auth'
import { FAILED, SUCCESS } from '../utility/constants'

const router = express.Router()

router.get('/:userId', async (req, res) => {
  const result = googleAuthValidate(req)
  res.json({
    status: result ? SUCCESS : FAILED
  })
})

export default router
