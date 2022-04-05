import * as express from 'express'
import list from '../mock/list'

const router = express.Router()

router.get('/', (req, res) => {
  res.json(list)
})

export default router
