import * as express from 'express'
import list from '../mock/list'

const router = express.Router()

router.get('/', async (req, res) => {
  res.json(list)
})

export default router
