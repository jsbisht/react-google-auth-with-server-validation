import { googleAuthValidate } from './google-auth'

export const isAuthenticated = async (req, res, next) => {
  const allowLogin = await googleAuthValidate(req)
  if (allowLogin) {
    next()
  } else {
    res.status(403).send({ auth: false })
  }
}
