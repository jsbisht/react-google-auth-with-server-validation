import { useState } from 'react'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null)

  let onSignIn = (newUser) => {
    setUser(newUser)
  }

  let onSignOut = () => {
    setUser(null)
  }

  let value = { user, onSignIn, onSignOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
