import React from 'react'
import { useGoogleLogout } from 'react-google-login'
import { useAuth } from '../../state/AuthContext'
import { GOOGLE_CLIENT_ID } from '../../utility/constants/app'
import { GOOGLE_ICON } from '../../utility/constants/urls'

const clientId = GOOGLE_CLIENT_ID

export default function GoogleLogout() {
  let { onSignOut } = useAuth()

  const onLogoutSuccess = (res) => {
    onSignOut()
    console.log('Logged out success')
  }

  const onFailure = () => {
    console.log('Handle failure cases')
  }

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure
  })

  return (
    <button onClick={signOut} className="button">
      <img src={GOOGLE_ICON} alt="google login" className="icon"></img>
      <span className="buttonText">Sign out</span>
    </button>
  )
}
