import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGoogleLogin } from 'react-google-login'
import { useAuth } from '../../state/AuthContext'
import { callListApi } from '../../utility/api'
import { refreshTokenSetup } from '../../utility/auth/refreshToken'
import { GOOGLE_CLIENT_ID } from '../../utility/constants/app'
import { PATH_AUTH } from '../../utility/constants/path'
import { GOOGLE_ICON } from '../../utility/constants/urls'

const clientId = GOOGLE_CLIENT_ID

export default function GoogleLogin() {
  let { onSignIn } = useAuth()
  const navigate = useNavigate()

  const onSuccess = async (res) => {
    const { tokenId } = res
    const { err, data } = await callListApi({
      path: PATH_AUTH,
      headers: {
        authorization: tokenId
      }
    })
    if (err) {
      navigate('/', { replace: true })
    }
    onSignIn(res)
    navigate('/home', { replace: true })
    refreshTokenSetup(res)
  }

  const onFailure = (res) => {
    console.log('Login failed: res:', res)
    navigate('/', { replace: true })
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline'
    // responseType: 'code',
    // prompt: 'consent',
  })

  return (
    <button onClick={signIn} className="button">
      <img src={GOOGLE_ICON} alt="google login" className="icon"></img>
      <span className="buttonText">Sign in with Google</span>
    </button>
  )
}
