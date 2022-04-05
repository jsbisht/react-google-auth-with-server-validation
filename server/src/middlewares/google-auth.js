import axios from 'axios'

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com'
/**
 * @returns Boolean true if user is logged in and userId matches
 */
export async function googleAuthValidate(req) {
  const idToken = req.headers?.authorization
  if (!idToken) {
    return false
  } else {
    try {
      const url = `https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`
      const { data } = await axios.get(url)
      const { aud } = data
      return aud === clientId
    } catch (error) {
      console.error('Could not validate idToken')
      console.error(error)
    }
  }

  return false
}
