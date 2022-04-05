const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com' ||
  process.env.GOOGLE_CLIENT_ID

/**
 * @returns Boolean true if user is logged in and userId matches
 */
export async function googleAuthValidate(req) {
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
  if (!req.headers?.authorization?.startsWith('Bearer ')) {
    //throw new AuthenticationError('you must be logged in');
    return false
  }
  const idToken = req.headers.authorization.split('Bearer ')[1]
  const ticket = await client.verifyIdToken({
    idToken,
    audience: clientId
  })

  const payload = ticket.getPayload()
  const userId = payload.sub
  const requestUserId = req.params?.userId

  return userId === requestUserId
}
