import { createContext, useContext } from 'react'

export const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw Error('useAuth must only be used within AuthContext')
  }

  return context
}
