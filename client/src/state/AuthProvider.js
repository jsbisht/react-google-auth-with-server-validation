import { useState } from 'react'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {
  let [authData, setAuthData] = useState(null)

  let onSignIn = (data) => {
    setAuthData(data)
  }

  let onSignOut = () => {
    setAuthData(null)
  }

  let value = { authData, onSignIn, onSignOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
